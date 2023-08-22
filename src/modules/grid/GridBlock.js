import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function GridBlock(props) {
  const arrayOfCats = props.data;

  return (
    <Container className="GridBlock">
      <Row>
        <Col>
          <Image
            src={`https://cdn2.thecatapi.com/images/${arrayOfCats[0].img_id}.jpg`}
            alt="Cat"
            fluid
            rounded
          />
          {arrayOfCats[1] && (
            <Image
              src={`https://cdn2.thecatapi.com/images/${arrayOfCats[1].img_id}.jpg`}
              alt="Cat"
              fluid
              rounded
            />
          )}
        </Col>
        <Col>
          <Row>
            <Col>
              {arrayOfCats[2] && (
                <Image
                  src={`https://cdn2.thecatapi.com/images/${arrayOfCats[2].img_id}.jpg`}
                  alt="Cat"
                  fluid
                  rounded
                />
              )}
              {arrayOfCats[3] && (
                <Image
                  src={`https://cdn2.thecatapi.com/images/${arrayOfCats[3].img_id}.jpg`}
                  alt="Cat"
                  fluid
                  rounded
                />
              )}
            </Col>
            <div>
              {arrayOfCats[4] && (
                <Image
                  src={`https://cdn2.thecatapi.com/images/${arrayOfCats[4].img_id}.jpg`}
                  alt="Cat"
                  fluid
                  rounded
                />
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
