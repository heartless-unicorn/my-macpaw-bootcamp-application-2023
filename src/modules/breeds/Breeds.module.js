import { useEffect, useState } from "react";

import Search from "../search/Search";
import Loader from "../helpers/Loader";
import Grid from "../grid/Grid";

import FiltersBreeds from "./FiltersBreeds";
import { SourceContext } from "../helpers/functions";
import BackButton from "../helpers/BackButton";

export default function Breeds() {
  const [gridData, setGridData] = useState([]);

  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    if (gridData.length > 0) {
      setisLoaded(true);
    }
  }, [gridData]);

  return (
    <div>
      <Search />
      <BackButton />
      <FiltersBreeds
        changeGridData={(data) => {
          setGridData(data);
        }}
      />
      <SourceContext.Provider value="breeds">
        {isLoaded ? <Grid catList={gridData} /> : <Loader />}
      </SourceContext.Provider>
    </div>
  );
}
