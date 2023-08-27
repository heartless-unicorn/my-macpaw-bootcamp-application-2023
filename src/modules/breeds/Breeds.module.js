import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Search from "../search/Search";
import Loader from "../helpers/Loader";
import Grid from "../grid/Grid";

import FiltersBreeds from "./FiltersBreeds";
import { SourceContext } from "../helpers/functions";
import BackButton from "../helpers/BackButton";

import "./Breeds.css";

export default function Breeds() {
  const [gridData, setGridData] = useState([]);

  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    if (gridData.length > 0) {
      setisLoaded(true);
    }
  }, [gridData]);

  return (
    <div className="Breeds">
      <Search />
      <div className="app-block">
        <Row className="menu">
          <Col lg={1}>
            <BackButton />
          </Col>
          <Col lg={3}>
            <p className="navigation-header">Breeds</p>
          </Col>
          <Col lg={8}>
            <FiltersBreeds
              changeGridData={(data) => {
                setGridData(data);
              }}
            />
          </Col>
        </Row>

        <SourceContext.Provider value="breeds">
          {isLoaded ? <Grid catList={gridData} /> : <Loader />}
        </SourceContext.Provider>
      </div>
    </div>
  );
}
