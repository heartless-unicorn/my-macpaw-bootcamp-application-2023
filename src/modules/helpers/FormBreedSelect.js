import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";

import { fetchBreedsList, fetchBreedPics } from "./fetchFunctions";

export default function FormBreedSelect(props) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchBreedsList().then((response) => setBreeds(response));
  }, []);

  const getBreedPics = (e) => {
    fetchBreedPics(e.target.value).then((response) => {
      props.breedGridChange(response);
    });
  };

  return (
    <Form.Select
      defaultValue="All breeds"
      onChange={getBreedPics}
      className="form-input"
    >
      <option>All breeds</option>
      {breeds.map((el, i) => {
        return (
          <option value={el.id} key={i}>
            {el.name}
          </option>
        );
      })}
    </Form.Select>
  );
}
