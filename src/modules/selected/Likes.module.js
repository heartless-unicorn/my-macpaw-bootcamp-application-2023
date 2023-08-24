import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

export default function Likes() {
  const liked = useSelector((store) => store["liked"]).map((el) => {
    return { img_url: `https://cdn2.thecatapi.com/images/${el.id}.jpg` };
  });

  return (
    <div>
      <Search />
      {liked ? <Grid catList={liked} /> : <NoItems />}
    </div>
  );
}
