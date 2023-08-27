import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";

import Button from "react-bootstrap/Button";
import { fetchRandomImg } from "../helpers/fetchFunctions";
import { addPicToStore } from "../helpers/functions";
import FavSvg from "../../media/svgs/FavSvg";
import LikeSvg from "../../media/svgs/LikeSvg";
import DisLikeSvg from "../../media/svgs/DisLikeSvg";

export default function ActionMenu(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    handleAction();
  }, []);

  const handleAction = (vote) => {
    if (vote) {
      const storeData = addPicToStore(props.curImg, vote);
      dispatch(storeData);
      props.addAction({ id: props.curImg.id, action: vote, time: new Date() });
    }

    props.changePic(null);
    fetchRandomImg().then((response) => {
      props.changePic(response);
    });
  };
  return (
    <div className="action-menu">
      <Button
        onClick={() => {
          handleAction("like");
        }}
        variant="votes"
        className="like"
      >
        <LikeSvg color="white" />
      </Button>
      <Button
        onClick={() => {
          handleAction("favorite");
        }}
        variant="votes"
        className="fav"
      >
        {" "}
        <FavSvg color="white" />
      </Button>
      <Button
        onClick={() => {
          handleAction("dislike");
        }}
        variant="votes"
        className="dislike"
      >
        {" "}
        <DisLikeSvg color="white" />
      </Button>
    </div>
  );
}
