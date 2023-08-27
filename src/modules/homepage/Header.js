import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";

import Paw from "../../media/paw.svg";
import LightLogo from "../../media/light/logo-light.svg";
import DarkLogo from "../../media/dark/logo-dark.svg";
import LightEye from "../../media/light/eye-light.svg";
import DarkEye from "../../media/dark/eye-dark.svg";

export default function Header(props) {
  const theme = props.isLight;
  return (
    <Row>
      <Col>
        {" "}
        <Image src={Paw} alt="PetsPaw Logo" className="me-1" />
        <Image src={theme ? LightLogo : DarkLogo} alt="PetsPaw Logo" />
      </Col>
      <Col className="header">
        <div className="eye">
          <Image src={theme ? LightEye : DarkEye} alt="Eye Logo" />
        </div>
        <label className="switch">
          <input
            type="checkbox"
            onClick={() => {
              props.changeTheme((bool) => !bool);
            }}
          />
          <span className="slider round"></span>
        </label>
      </Col>
    </Row>
  );
}
