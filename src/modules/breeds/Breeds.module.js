import { useEffect, useState } from "react";

import Search from "../search/Search";
import Loader from "../helpers/Loader";
import Grid from "../grid/Grid";

import FiltersBreeds from "./FiltersBreeds";

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
      <FiltersBreeds
        changeGridData={(data) => {
          setGridData(data);
        }}
      />
      {isLoaded ? <Grid catList={gridData} /> : <Loader />}
    </div>
  );
}
