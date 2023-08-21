//media imports
import votingImg from "../../../media/vote-table.png";
import breedsImg from "../../../media/pet-breeds.png";
import galleryImg from "../../../media/images-search.png";

import NavBlock from "./NavBlock";

export default function Navigation() {
  return (
    <div>
      <NavBlock name="Voting" image={votingImg} />
      <NavBlock name="Breeds" image={breedsImg} />
      <NavBlock name="Gallery" image={galleryImg} />
    </div>
  );
}
