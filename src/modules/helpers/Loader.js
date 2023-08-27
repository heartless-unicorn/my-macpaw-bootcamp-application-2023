import "./Loader.css";

import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <>
      <div className="Spinner">
        {" "}
        <Spinner animation="border" role="status" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
}
