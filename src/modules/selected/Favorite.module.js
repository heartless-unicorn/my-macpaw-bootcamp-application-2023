import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

export default function Favorite() {
  const favorite = useSelector((store) => store["favorite"]).map((el) => {
    return { img_url: `https://cdn2.thecatapi.com/images/${el.id}.jpg` };
  });

  return (
    <div>
      <Search />
      {favorite ? <Grid catList={favorite} /> : <NoItems />}
    </div>
  );
}
