import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SearchSvg from "../../media/svgs/SearchSvg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SearchForm() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <Form
        onSubmit={() => {
          navigate(`/search/${searchInputValue.trim().toLowerCase()}`);
        }}
        className="search-form"
      >
        <Row>
          <Col lg={11}>
            <Form.Control
              placeholder="Search for breeds by name"
              onChange={(e) => {
                setSearchInputValue(e.target.value);
              }}
              className="form-input"
            />{" "}
          </Col>
          <Col lg={1}>
            <Button type="submit" variant="flat" className="btn-search">
              {" "}
              <SearchSvg />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
