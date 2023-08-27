import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchForm from "./SearchForm";
import LikeSvg from "../../media/svgs/LikeSvg";
import FavSvg from "../../media/svgs/FavSvg";
import DisLikeSvg from "../../media/svgs/DisLikeSvg";

import "./Search.css";
export default function Search() {
  return (
    <>
      <Row className="Search">
        <Col lg={8}>
          <SearchForm />
        </Col>
        <Col lg={4} className="votes">
          <Link to="/likes">
            <LikeSvg />
          </Link>
          <Link to="/favorite">
            <FavSvg />
          </Link>
          <Link to="/dislikes">
            <DisLikeSvg />
          </Link>
        </Col>
      </Row>
    </>
  );
}
