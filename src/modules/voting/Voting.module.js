import { useState } from "react";

import Search from "../search/Search";
import ActionMenu from "./ActionMenu";
import ActionMessages from "./ActionMessages";
import Loader from "../helpers/Loader";

import Image from "react-bootstrap/Image";

export default function Voting() {
  const [imageSrc, setImageSrc] = useState(null);
  const [actionLog, setActionLog] = useState([]);

  return (
    <div>
      <Search />

      {imageSrc ? (
        <Image src={imageSrc.url} alt="Cat" fluid rounded />
      ) : (
        <Loader />
      )}

      <ActionMenu
        changePic={(url) => {
          setImageSrc(url);
        }}
        addAction={(action) => {
          actionLog
            ? setActionLog((prev) => [...prev, action])
            : setActionLog([action]);
        }}
        curImg={imageSrc}
      />
      <ActionMessages messages={actionLog} />
    </div>
  );
}
