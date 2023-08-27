import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Search from "../search/Search";
import ActionMenu from "./ActionMenu";
import ActionMessages from "./ActionMessages";
import Loader from "../helpers/Loader";

import Image from "react-bootstrap/Image";
import BackButton from "../helpers/BackButton";

import "./Voting.css";

export default function Voting() {
  const [imageSrc, setImageSrc] = useState(null);
  const [actionLog, setActionLog] = useState([]);

  return (
    <div className="Voting">
      <Search />
      <div className="app-block">
        <Row>
          <Col lg={1}>
            <BackButton />
          </Col>
          <Col lg={3}>
            <p className="navigation-header">Voting</p>
          </Col>
        </Row>
        <div className="img-block">
          {imageSrc ? <Image src={imageSrc.img_url} alt="Cat" /> : <Loader />}
        </div>
        <ActionMenu
          changePic={(url) => {
            setImageSrc(url);
          }}
          addAction={(action) => {
            actionLog
              ? setActionLog((prev) => [...prev, action])
              : setActionLog([action]);
          }}
          curImg={imageSrc}
        />
        <ActionMessages messages={actionLog} />
      </div>
    </div>
  );
}
