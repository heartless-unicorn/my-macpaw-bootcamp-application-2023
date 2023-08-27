import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BackButton from "../helpers/BackButton";

export default function Dislikes() {
  const disliked = useSelector((store) => store["disliked"]).map((el) => {
    console.log(el);
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
            <span className="navigation-header">Dislikes</span>
          </Col>
        </Row>
        {disliked.length > 0 ? <Grid catList={disliked} /> : <NoItems />}
      </div>
    </div>
  );
}
