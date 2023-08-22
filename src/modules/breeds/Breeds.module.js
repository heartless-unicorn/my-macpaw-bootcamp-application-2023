import { useEffect, useState } from "react";

import Search from "../search/Search";
import Loader from "../helpers/Loader";
import Grid from "../grid/Grid";

import FiltersBreeds from "./FiltersBreeds";
import { getDefaultGridPics } from "../helpers/fetchFunctions";

export default function Breeds() {
  const [gridData, setGridData] = useState([]);

  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    getDefaultGridPics().then((data) => {
      setGridData(data);
      setisLoaded(true);
    });
  }, []);

  return (
    <div>
      <Search />
      <FiltersBreeds />
      {isLoaded ? <Grid catList={gridData} /> : <Loader />}
    </div>
  );
}
