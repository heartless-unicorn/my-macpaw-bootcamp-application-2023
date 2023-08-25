import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

export default function Dislikes() {
  const disliked = useSelector((store) => store["disliked"]).map((el) => {
    return { img_url: `https://cdn2.thecatapi.com/images/${el}.jpg` };
  });

  return (
    <div>
      <Search />
      {disliked.length > 0 ? <Grid catList={disliked} /> : <NoItems />}
    </div>
  );
}
