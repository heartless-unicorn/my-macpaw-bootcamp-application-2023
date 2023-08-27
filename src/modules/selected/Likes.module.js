import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import BackButton from "../helpers/BackButton";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Likes() {
  const liked = useSelector((store) => store["liked"]).map((el) => {
    return { img_url: el.img_url };
  });

  return (
    <div>
      <Search />
      <div className="app-block">
        <Row className="menu">
          <Col lg={1}>
            <BackButton />
          </Col>
          <Col lg={10} className="gallery-title">
            <span className="navigation-header">Likes</span>
          </Col>
        </Row>
        {liked.length > 0 ? <Grid catList={liked} /> : <NoItems />}
      </div>
    </div>
  );
}
