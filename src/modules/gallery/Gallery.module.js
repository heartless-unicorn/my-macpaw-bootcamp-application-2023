import { useState, useEffect } from "react";

import Grid from "../grid/Grid";
import FiltersGallery from "./FiltersGallery";
import Loader from "../helpers/Loader";

export default function Gallery() {
  const [gridData, setGridData] = useState([]);

  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    if (gridData.length > 0) {
      setisLoaded(true);
    }
  }, [gridData]);

  return (
    <div>
      <FiltersGallery
        changeGridData={(data) => {
          setGridData(data);
        }}
      />
      {isLoaded ? <Grid catList={gridData} /> : <Loader />}
    </div>
  );
}
