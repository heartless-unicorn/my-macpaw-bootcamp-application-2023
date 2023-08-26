import Button from "react-bootstrap/Button";
import UploadForm from "./UploadForm";

export default function Upload(props) {
  console.log(props);
  return (
    <>
      <Button onClick={props.closeUploadPopUp}>Close</Button>
      <UploadForm />
    </>
  );
}
