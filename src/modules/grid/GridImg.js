import Image from "react-bootstrap/Image";

export default function GridImg(props) {
  const info = props.catInfoCard;
  if (info) {
    return <Image src={info.img_url} alt="Cat" fluid rounded />;
  } else {
    return null;
  }
}
