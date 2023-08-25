import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from "../grid/Grid";
import { SourceContext } from "../helpers/functions";
import NoItems from "../helpers/NoItems";
import Search from "../search/Search";

export default function Favorite() {
  const [fav, setFav] = useState([]);
  const favorite = useSelector((store) => store["favorite"]);
  useEffect(() => {
    setFav(
      favorite.map((el) => {
        return {
          id: el,
          img_url: `https://cdn2.thecatapi.com/images/${el}.jpg`,
        };
      })
    );
  }, [favorite]);
  return (
    <div>
      <Search />
      <SourceContext.Provider value="fav">
        {fav.length > 0 ? <Grid catList={fav} /> : <NoItems />}
      </SourceContext.Provider>
    </div>
  );
}
