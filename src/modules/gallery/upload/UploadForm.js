import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { fetchUploadUserPic } from "../../helpers/fetchFunctions";

export default function UploadForm() {
  const [userInputFile, setUserInputFile] = useState();
  const [userPic, setUserPic] = useState();
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    userInputFile && setUserPic(URL.createObjectURL(userInputFile));
  }, [userInputFile]);

  const handleImageUpload = (e) => {
    e.preventDefault();
    console.log(userInputFile);
    fetchUploadUserPic(userInputFile).then((response) => {
      setIsSuccess(response);
      if (response) {
        setUserInputFile(null);
        setUserPic(null);
      }
    });
  };
  return (
    <Form onSubmit={handleImageUpload}>
      <Form.Group>
        <Form.Control
          type="file"
          multiple
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setUserInputFile(e.target.files[0]);
            setIsSuccess(null);
          }}
        />
      </Form.Group>
      {userPic && <Image src={userPic} fluid />}
      {userPic ? (
        <p> Image file name: {userInputFile.name}</p>
      ) : (
        <p>No file selected</p>
      )}
      {userPic && <Button type="submit">Upload an Image</Button>}
      {isSuccess !== null && (isSuccess ? <p>Success</p> : <p>Nah</p>)}
    </Form>
  );
}
