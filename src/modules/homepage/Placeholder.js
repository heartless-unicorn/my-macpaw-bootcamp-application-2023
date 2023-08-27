import Image from "react-bootstrap/Image";

import placeholderImg from "../../media/girl-and-pet.png";

import "./styles/Placeholder.css";

export default function Placeholder() {
  return (
    <div className="Placeholder mb-5">
      <div className="square">
        <Image src={placeholderImg} className="picture" />
      </div>
    </div>
  );
}
