import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchForm from "./SearchForm";

export default function Search() {
  return (
    <>
      <Row>
        <Col>
          <SearchForm />
        </Col>
        <Col>
          <Link to="/likes">Like</Link>
          <Link to="/favorites">Fav</Link>
          <Link to="/dislikes">Dislike</Link>
        </Col>
      </Row>
    </>
  );
}
