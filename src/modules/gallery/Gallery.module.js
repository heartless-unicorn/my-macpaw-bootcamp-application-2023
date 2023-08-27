import { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Search from "../search/Search";
import FiltersGallery from "./FiltersGallery";
import Grid from "../grid/Grid";
import Upload from "./upload/Upload";

import Loader from "../helpers/Loader";
import { SourceContext } from "../helpers/functions";
import BackButton from "../helpers/BackButton";

import UploadSvg from "../../media/svgs/UploadSvg";

import "./Gallery.css";

export default function Gallery() {
  const [gridData, setGridData] = useState([]);

  const [isLoaded, setisLoaded] = useState(false);

  const [isUpload, setIsUpload] = useState(false);

  useEffect(() => {
    if (gridData.length > 0) {
      setisLoaded(true);
    }
  }, [gridData]);

  return (
    <div className="Gallery">
      {isUpload ? (
        <Upload
          closeUploadPopUp={() => {
            setIsUpload(false);
          }}
        />
      ) : (
        <div>
          <Search />
          <div className="app-block">
            <Row className="menu">
              <Col lg={1}>
                <BackButton />
              </Col>
              <Col lg={10} className="gallery-title">
                <span className="navigation-header">Gallery</span>
              </Col>
              <Col lg={1}>
                <Button
                  onClick={() => {
                    setIsUpload(true);
                  }}
                  variant="flat"
                >
                  <UploadSvg />
                </Button>
              </Col>
            </Row>

            <FiltersGallery
              changeGridData={(data) => {
                setGridData(data);
              }}
            />
            <SourceContext.Provider value="gallery">
              {isLoaded ? <Grid catList={gridData} /> : <Loader />}
            </SourceContext.Provider>
          </div>
        </div>
      )}
    </div>
  );
}
