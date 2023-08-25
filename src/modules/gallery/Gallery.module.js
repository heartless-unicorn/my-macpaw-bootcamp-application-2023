import { useState, useEffect } from "react";

import Grid from "../grid/Grid";
import FiltersGallery from "./FiltersGallery";
import Loader from "../helpers/Loader";

import { SourceContext } from "../helpers/functions";
import Search from "../search/Search";

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
      <Search />
      <FiltersGallery
        changeGridData={(data) => {
          setGridData(data);
        }}
      />
      <SourceContext.Provider value="gallery">
        {isLoaded ? <Grid catList={gridData} /> : <Loader />}
      </SourceContext.Provider>
    </div>
  );
}
