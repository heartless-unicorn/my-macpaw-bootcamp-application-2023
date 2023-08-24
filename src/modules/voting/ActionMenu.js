import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import Button from "react-bootstrap/Button";
import { fetchRandomImg } from "../helpers/fetchFunctions";
import { addPicToStore } from "../helpers/functions";

export default function ActionMenu(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    handleAction();
  }, []);

  const handleAction = (vote) => {
    if (vote) {
      const storeData = addPicToStore(props.curImg.id, vote);
      dispatch(storeData);
      props.addAction({ id: props.curImg.id, action: vote, time: new Date() });
    }

    props.changePic(null);
    fetchRandomImg().then((response) => {
      props.changePic(response);
    });
  };
  return (
    <>
      <Button
        onClick={() => {
          handleAction("like");
        }}
      >
        Like
      </Button>
      <Button
        onClick={() => {
          handleAction("favourite");
        }}
      >
        {" "}
        Fav
      </Button>
      <Button
        onClick={() => {
          handleAction("dislike");
        }}
      >
        {" "}
        Dislike
      </Button>
    </>
  );
}
