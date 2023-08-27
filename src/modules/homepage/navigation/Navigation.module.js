//media imports
import votingImg from "../../../media/vote-table.png";
import breedsImg from "../../../media/pet-breeds.png";
import galleryImg from "../../../media/images-search.png";

import NavBlock from "./NavBlock";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/Navigation.css";
export default function Navigation() {
  return (
    <Row className="Navigation">
      <Col className="voting">
        <NavBlock name="Voting" image={votingImg} />
      </Col>
      <Col className="breeds">
        {" "}
        <NavBlock name="Breeds" image={breedsImg} />
      </Col>
      <Col className="gallery">
        {" "}
        <NavBlock name="Gallery" image={galleryImg} />
      </Col>
    </Row>
  );
}
