import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchForm() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <Form
        onSubmit={() => {
          navigate(`/search/${searchInputValue.trim().toLowerCase()}`);
        }}
      >
        <InputGroup>
          <Form.Control
            placeholder="Breed"
            onChange={(e) => {
              setSearchInputValue(e.target.value);
            }}
          />
          <Button as="input" type="submit" value="Search" />
        </InputGroup>
      </Form>
    </>
  );
}
