import { Route, Routes as MainRoutes } from "react-router-dom";

//pages imports
import Voting from "../modules/voting/Voting.module";
import Gallery from "../modules/gallery/Gallery.module";
import Breeds from "../modules/breeds/Breeds.module";

import Likes from "../modules/selected/Likes.module";
import Dislikes from "../modules/selected/Dislikes.module";
import Favorite from "../modules/selected/Favorite.module";

import Placeholder from "../modules/homepage/Placeholder";
import SearchResult from "../modules/search/SearchResult";

export default function Routes() {
  return (
    <div>
      <MainRoutes>
        <Route path="/" element={<Placeholder />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/likes" element={<Likes />} />
        <Route path="/dislikes" element={<Dislikes />} />
        <Route path="favorite" element={<Favorite />} />

        <Route path="/search/:breed" element={<SearchResult />} />
      </MainRoutes>
    </div>
  );
}
