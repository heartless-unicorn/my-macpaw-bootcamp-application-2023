import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Search from "./Search";
import Grid from "../grid/Grid";
import Loader from "../helpers/Loader";

import SearchForBreed from "./SearchForBreed";

export default function SearchResult() {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState(null);
  const { breed } = useParams();

  useEffect(() => {
    SearchForBreed(breed).then((response) => {
      setCats(response);
      setLoading(false);
    });
  }, [breed]);

  return (
    <>
      <Search />
      {loading ? (
        <Loader />
      ) : (
        <div> {cats ? <Grid /> : <p>Sorry, no cats</p>}</div>
      )}
    </>
  );
}
