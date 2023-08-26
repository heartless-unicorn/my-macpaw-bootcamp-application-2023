import { useContext, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Image from "react-bootstrap/Image";

import { addPicToStore, SourceContext } from "../helpers/functions";

export default function GridImg(props) {
  const info = props.catInfoCard;

  const source = useContext(SourceContext);

  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);

  const navigate = useNavigate();

  const [isFav, setisFav] = useState(null);

  useEffect(() => {
    if ((source === "gallery" || source === "fav") && info) {
      setisFav(favorite.some((item) => item.id === info.id));
    }
  }, []);

  useEffect(() => {}, [favorite]);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(addPicToStore(info, "remove"));
      source === "gallery" && setisFav(false);
    } else {
      dispatch(addPicToStore(info, "favorite"));
      source === "gallery" && setisFav(true);
    }
  };

  if (info) {
    return (
      <>
        <Image
          src={info.img_url}
          alt="Cat"
          fluid
          rounded
          onClick={() => {
            if (source === "breeds") {
              navigate(`/breeds/${info.id}`);
            } else if (source === "gallery" || source === "fav") {
              handleFavorite();
            }
          }}
        />
        {source === "gallery" || source === "fav" ? (
          <p>{isFav ? "Fav" : "No Fav"}</p>
        ) : null}
      </>
    );
  } else {
    return null;
  }
}
