import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import Search from "../search/Search";
import FiltersGallery from "./FiltersGallery";
import Grid from "../grid/Grid";
import Upload from "./upload/Upload";

import Loader from "../helpers/Loader";
import { SourceContext } from "../helpers/functions";
import BackButton from "../helpers/BackButton";

export default function Gallery() {
  const [gridData, setGridData] = useState([]);

  const [isLoaded, setisLoaded] = useState(false);

  const [isUpload, setIsUpload] = useState(false);

  useEffect(() => {
    if (gridData.length > 0) {
      console.log("here");
      setisLoaded(true);
    }
  }, [gridData]);

  return (
    <div>
      {isUpload ? (
        <Upload
          closeUploadPopUp={() => {
            setIsUpload(false);
          }}
        />
      ) : (
        <div>
          <Search />
          <BackButton />
          <Button
            onClick={() => {
              setIsUpload(true);
            }}
          >
            Upload
          </Button>

          <FiltersGallery
            changeGridData={(data) => {
              setGridData(data);
            }}
          />
          <SourceContext.Provider value="gallery">
            {isLoaded ? <Grid catList={gridData} /> : <Loader />}
          </SourceContext.Provider>
        </div>
      )}
    </div>
  );
}
