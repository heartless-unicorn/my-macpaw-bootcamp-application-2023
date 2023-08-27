import Button from "react-bootstrap/Button";
import BackButtonSvg from "../../media/svgs/BackButtonSvg";

import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        variant="flat"
      >
        <BackButtonSvg />
      </Button>
    </div>
  );
}
