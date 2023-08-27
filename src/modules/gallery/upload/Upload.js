import Button from "react-bootstrap/Button";
import UploadForm from "./UploadForm";

import CloseSvg from "../../../media/svgs/CloseSvg";

import "./Upload.css";

export default function Upload(props) {
  console.log(props);
  return (
    <div className="Upload">
      <div className="fog"></div>
      <div className="upload-field">
        <div className="button-field">
          <Button onClick={props.closeUploadPopUp} variant="vote">
            <CloseSvg />
          </Button>
        </div>
        <div>
          <h1>Upload a .jpg or .png Cat Image</h1>
          <h3>
            Any uploads must comply with the{" "}
            <a href="https://thecatapi.com/privacy">upload guidelines</a> or
            face deletion.
          </h3>
        </div>

        <UploadForm />
      </div>
    </div>
  );
}
