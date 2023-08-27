import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

export default function SpecificBreedInfo(props) {
  const info = props.about;

  return (
    <Container className="info">
      <Image src={info.pic} alt="Cat" />
      <div className="name-block">
        <h3>{info.name}</h3>
      </div>
      <div className="info-field">
        <Row className="pt-4">
          <Col>
            <p className="temper">
              <span>Temperament:</span> <br />
              {info.temper}
            </p>
          </Col>
          <Col>
            <p>
              <span>Origin: </span>
              {info.origin}
            </p>
            <p>
              <span>Weight: </span>
              {info.weight}
            </p>
            <p>
              <span>Life span: </span>
              {info.lifespan}
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
