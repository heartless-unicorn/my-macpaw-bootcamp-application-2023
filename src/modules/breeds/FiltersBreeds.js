import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { getBreedsList } from "../helpers/fetchFunctions";

export default function FiltersBreeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreedsList().then((response) => setBreeds(response));
  }, []);

  return (
    <>
      <Form>
        <Row>
          <Form.Group as={Col} controlId="formGridBreeds">
            <Form.Select defaultValue="All breeds">
              <option>All breeds</option>
              {breeds.map((el) => {
                return <option key={el.id}>{el.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLimit">
            <Form.Select defaultValue="10">
              <option value="5">Limit: 5</option>
              <option value="10">Limit: 10</option>
              <option value="15">Limit: 15</option>
              <option value="20">Limit: 20</option>
            </Form.Select>
          </Form.Group>
          <Col>
            <Button>A - Z</Button>
            <Button>Z- A</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
