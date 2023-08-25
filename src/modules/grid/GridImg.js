import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Image from "react-bootstrap/Image";

import { SourceContext } from "../helpers/functions";
import ImageActionHandler from "../helpers/ImageActonHandler";

export default function GridImg(props) {
  const info = props.catInfoCard;
  const source = useContext(SourceContext);

  const navigate = useNavigate();

  if (info) {
    return (
      <Image
        src={info.img_url}
        alt="Cat"
        fluid
        rounded
        onClick={() => {
          source === "breeds"
            ? navigate(`/breeds/${info.id}`)
            : ImageActionHandler(source, info.id);
        }}
      />
    );
  } else {
    return null;
  }
}
