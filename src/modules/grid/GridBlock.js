import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GridImg from "./GridImg";

export default function GridBlock(props) {
  const arrayOfCats = props.data;

  return (
    <Container className="GridBlock">
      <Row>
        <Col lg={4}>
          <GridImg catInfoCard={arrayOfCats[0]} />
          <GridImg catInfoCard={arrayOfCats[1]} />
        </Col>
        <Col lg={8}>
          <Row>
            <Col lg={12}>
              <Row>
                <Col>
                  <GridImg catInfoCard={arrayOfCats[2]} />
                </Col>
                <Col>
                  <GridImg catInfoCard={arrayOfCats[3]} />
                </Col>
              </Row>
            </Col>
            <div>
              <GridImg catInfoCard={arrayOfCats[4]} />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
