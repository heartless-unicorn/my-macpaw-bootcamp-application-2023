import Hero from "./navigation/Hero";
import Navigation from "./navigation/Navigation.module";

import Routes from "../../router/Routes";

import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

import Paw from "../../media/paw.svg";
import LightLogo from "../../media/logo-light.svg";
import DarkLogo from "../../media/logo-dark.svg";

import "./styles/Homepage.css";

export default function Homepage() {
  const [theme, setTheme] = useState(true);
  return (
    <Container className={`${theme ? "light" : "dark"} Homepage`} fluid>
      <Row>
        <Col lg={5} className="pe-5  ">
          <div className="sticky-block">
            <Row>
              <Col>
                <div>
                  {" "}
                  <Image src={Paw} alt="PetsPaw Logo" class="me-1" />
                  <Image
                    src={theme ? LightLogo : DarkLogo}
                    alt="PetsPaw Logo"
                  />
                </div>
              </Col>
              <Col>
                <div>
                  <label class="switch">
                    <input
                      type="checkbox"
                      onClick={() => {
                        setTheme((bool) => !bool);
                      }}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
              </Col>
            </Row>

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
