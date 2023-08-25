import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBreedById } from "../helpers/fetchFunctions";
import Loader from "../helpers/Loader";

import Search from "../search/Search";
import SpecificBreedInfo from "./SpecificBreedInfo";

export default function SpecificBreed() {
  const [info, setInfo] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);

  const data = useParams();

  useEffect(() => {
    fetchBreedById(data.name).then((response) => {
      setInfo(response);
      setIsLoaded(true);
    });
  }, []);
  return (
    <div>
      <Search />
      {isLoaded ? <SpecificBreedInfo about={info} /> : <Loader />}
    </div>
  );
}
