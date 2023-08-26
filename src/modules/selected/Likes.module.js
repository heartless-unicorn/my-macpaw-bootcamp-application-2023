import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import BackButton from "../helpers/BackButton";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

export default function Likes() {
  const liked = useSelector((store) => store["liked"]).map((el) => {
    return { img_url: el.img_url };
  });

  return (
    <div>
      <Search />
      <BackButton />

      {liked.length > 0 ? <Grid catList={liked} /> : <NoItems />}
    </div>
  );
}
