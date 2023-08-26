import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

export default function Dislikes() {
  const disliked = useSelector((store) => store["disliked"]).map((el) => {
    console.log(el);
    return { img_url: el.img_url };
  });

  return (
    <div>
      <Search />
      {disliked.length > 0 ? <Grid catList={disliked} /> : <NoItems />}
    </div>
  );
}
