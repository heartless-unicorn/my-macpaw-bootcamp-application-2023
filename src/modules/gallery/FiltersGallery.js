import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import UpdateSvg from "../../media/svgs/UpdateSvg";
import FormBreedSelect from "../helpers/FormBreedSelect";
import { fetchGalleryPics } from "../helpers/fetchFunctions";

export default function FiltersGallery(props) {
  const [limit, setLimit] = useState(10);
  const [isReversed, setReversed] = useState("RAND");
  const [imgType, setImgType] = useState("jpg,png,gif");
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetchGalleryPics(limit, isReversed, imgType).then((data) => {
      props.changeGridData(data);
    });
  }, [limit, isReversed, imgType, reload]);

  return (
    <div>
      <Form className="filter-form">
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Order</Form.Label>
            <Form.Select
              defaultValue="RAND"
              onChange={(e) => {
                setReversed(e.target.value);
              }}
              className="form-input"
            >
              <option value="RAND">Random</option>
              <option value="DESC">A to Z</option>
              <option value="ASC">Z to A</option>
            </Form.Select>

            <Form.Label>Breed</Form.Label>
            <FormBreedSelect
              breedGridChange={(pics) => {
                props.changeGridData(pics);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Type</Form.Label>
            <Form.Select
              defaultValue="jpg,png,gif"
              onChange={(e) => {
                setImgType(e.target.value);
              }}
              className="form-input"
            >
              <option value="jpg,png,gif">All</option>
              <option value="jpg,png">Static</option>
              <option value="gif">Animated</option>
            </Form.Select>
            <Row>
              <Col lg={10}>
                <Form.Label>Limit</Form.Label>
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
              </Col>
              <Col lg={2}>
                <Button
                  variant="flat"
                  onClick={() => {
                    setReload((bool) => !bool);
                  }}
                >
                  <UpdateSvg />
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
