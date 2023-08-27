import { useEffect, useState } from "react";

import { manageGridBlockData } from "../helpers/functions";

import GridBlock from "./GridBlock";

import "./Grid.css";

export default function Grid(props) {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    const catData = props.catList;
    const data = manageGridBlockData(catData, Math.ceil(catData.length / 5));
    setGridData(data);
  }, [props]);

  return (
    <div className="Grid">
      {gridData.map((el, i) => {
        return <GridBlock data={el} key={i} />;
      })}
    </div>
  );
}
