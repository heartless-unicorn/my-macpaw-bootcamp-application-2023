import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import PlaceholderImage from "../../../media/upload.png";
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
      <div className="upload-form">
        <div className={`placeholder-block ${!isSuccess && "red"}`}>
          {userPic ? (
            <Image src={userPic} className="user-pic" />
          ) : (
            <Image src={PlaceholderImage} />
          )}

          {!userPic && (
            <p>
              <span>Drag here</span> your file or <span>Click here</span> to
              upload
            </p>
          )}
        </div>

        <input
          className="file-input"
          type="file"
          multiple
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setUserInputFile(e.target.files[0]);
            setIsSuccess(null);
          }}
        />
      </div>

      <div className="message-box">
        {userPic ? (
          <p> Image file name: {userInputFile.name}</p>
        ) : (
          <p>No file selected</p>
        )}
        {userPic && (
          <Button type="submit" variant="votes">
            Upload an Image
          </Button>
        )}
        {isSuccess !== null &&
          (isSuccess ? (
            <p className="success">Thanks for the Upload - Cat found!</p>
          ) : (
            <p className="success">No Cat found - try a different one</p>
          ))}
      </div>
    </Form>
  );
}
