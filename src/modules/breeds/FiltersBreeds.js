import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FormBreedSelect from "../helpers/FormBreedSelect";
import { getFilteredPics } from "../helpers/fetchFunctions";

export default function FiltersBreeds(props) {
  const [limit, setLimit] = useState(10);
  const [isReversed, setReversed] = useState("ASC");

  useEffect(() => {
    getFilteredPics(limit, isReversed).then((data) => {
      props.changeGridData(data);
    });
  }, [limit, isReversed]);

  return (
    <>
      <Form>
        <Row>
          <Form.Group as={Col}>
            <FormBreedSelect
              breedGridChange={(pics) => {
                props.changeGridData(pics);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Select
              defaultValue="10"
              onChange={(e) => {
                setLimit(e.target.value);
              }}
            >
              <option value="5">Limit: 5</option>
              <option value="10">Limit: 10</option>
              <option value="15">Limit: 15</option>
              <option value="20">Limit: 20</option>
            </Form.Select>
          </Form.Group>
          <Col>
            <Button
              onClick={() => {
                setReversed("ASC");
              }}
            >
              A - Z
            </Button>
            <Button
              onClick={() => {
                setReversed("DESC");
              }}
            >
              Z- A
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
