import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FormBreedSelect from "../helpers/FormBreedSelect";
import { fetchFilteredPics } from "../helpers/fetchFunctions";
import SortingAtoBSvg from "../../media/svgs/SortingAtoBSvg";
import SortingBtoASvg from "../../media/svgs/SortingBtoASvg";

export default function FiltersBreeds(props) {
  const [limit, setLimit] = useState(10);
  const [isReversed, setReversed] = useState("ASC");

  useEffect(() => {
    fetchFilteredPics(limit, isReversed).then((data) => {
      props.changeGridData(data);
    });
  }, [limit, isReversed]);

  return (
    <>
      <Form className="breed-form">
        <Row>
          <Form.Group as={Col} lg={5}>
            <FormBreedSelect
              breedGridChange={(pics) => {
                props.changeGridData(pics);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} lg={3}>
            <Form.Select
              defaultValue="10"
              onChange={(e) => {
                setLimit(e.target.value);
              }}
              className="form-input"
            >
              <option value="5">Limit: 5</option>
              <option value="10">Limit: 10</option>
              <option value="15">Limit: 15</option>
              <option value="20">Limit: 20</option>
            </Form.Select>
          </Form.Group>
          <Col lg={4}>
            <Button
              onClick={() => {
                setReversed("ASC");
              }}
              variant="sort"
            >
              <SortingAtoBSvg color={isReversed === "ASC" ? "red" : "grey"} />
            </Button>
            <Button
              onClick={() => {
                setReversed("DESC");
              }}
              variant="sort"
            >
              <SortingBtoASvg color={isReversed === "DESC" ? "red" : "grey"} />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
