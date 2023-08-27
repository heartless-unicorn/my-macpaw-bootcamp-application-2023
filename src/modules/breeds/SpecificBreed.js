import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BackButton from "../helpers/BackButton";
import { fetchBreedById } from "../helpers/fetchFunctions";
import Loader from "../helpers/Loader";

import Search from "../search/Search";
import SpecificBreedInfo from "./SpecificBreedInfo";

export default function SpecificBreed() {
  const [info, setInfo] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);

  const data = useParams();

  useEffect(() => {
    fetchBreedById(data.name).then((response) => {
      setInfo(response);
      setIsLoaded(true);
    });
    console.log(data);
  }, []);
  return (
    <div className="SpecificBreed">
      <Search />
      <div className="app-block">
        <Row>
          <Col lg={1}>
            <BackButton />
          </Col>
          <Col lg={3}>
            <p className="navigation-header breed-header">Breeds</p>
          </Col>
          <Col lg={2}>
            <p className="navigation-header breed-id"> {data.name}</p>
          </Col>
        </Row>

        {isLoaded ? <SpecificBreedInfo about={info} /> : <Loader />}
      </div>
    </div>
  );
}
