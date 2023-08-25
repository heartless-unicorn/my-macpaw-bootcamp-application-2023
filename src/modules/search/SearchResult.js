import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Search from "./Search";
import Grid from "../grid/Grid";
import Loader from "../helpers/Loader";

import { searchForBreed } from "../helpers/fetchFunctions";
import { SourceContext } from "../helpers/functions";

export default function SearchResult() {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState(null);
  const { breed } = useParams();

  useEffect(() => {
    searchForBreed(breed).then((response) => {
      console.log(response);
      setCats(response);
      setLoading(false);
    });
  }, [breed]);

  return (
    <>
      <Search />
      <SourceContext.Provider value="breeds">
        {loading ? (
          <Loader />
        ) : (
          <div> {cats ? <Grid catList={cats} /> : <p>Sorry, no cats</p>}</div>
        )}
      </SourceContext.Provider>
    </>
  );
}
