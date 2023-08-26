import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
    </div>
  );
}
