import Image from "react-bootstrap/Image";

import placeholderImg from "../../media/girl-and-pet.png";

export default function Placeholder() {
  return (
    <>
      <Image src={placeholderImg} fluid />
    </>
  );
}
