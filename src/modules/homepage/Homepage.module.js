import Hero from "./navigation/Hero";
import Navigation from "./navigation/Navigation.module";

import Routes from "../../router/Routes";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Homepage() {
  return (
    <Container>
      <Row>
        <Col>
          <Hero />
          <Navigation />
        </Col>
        <Col>
          <Routes />
        </Col>
      </Row>
    </Container>
  );
}
