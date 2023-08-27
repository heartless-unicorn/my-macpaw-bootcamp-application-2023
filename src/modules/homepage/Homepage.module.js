import Hero from "./navigation/Hero";
import Navigation from "./navigation/Navigation.module";
import Header from "./Header";

import Routes from "../../router/Routes";

import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useMediaQuery } from "react-responsive";

import "./styles/Homepage.css";

export default function Homepage() {
  const [theme, setTheme] = useState(true);

  return (
    <Container className={`${theme ? "light" : "dark"} Homepage`} fluid>
      <Row>
        <Col lg={5} className={`pe-5`}>
          <div className="sticky-block">
            <Header
              changeTheme={(bool) => {
                setTheme(bool);
              }}
              isLight={theme}
            />
            <Hero />
            <Navigation />
          </div>
        </Col>
        <Col lg={7}>
          <Routes />
        </Col>
      </Row>
    </Container>
  );
}
