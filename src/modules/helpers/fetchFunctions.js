const API_KEY =
  "live_KFI6LB7w6qzReMGnCyNwSPHqXw00jkLK5V0dmEd0PwwCuDP4IjBnBs7ZnqVq7Gw6";

const getBreedsList = async () => {
  let breeds = null;
  await fetch("https://api.thecatapi.com/v1/breeds/")
    .then((response) => response.json())
    .then((response) => {
      breeds = response.map((el) => {
        return {
          name: el.name,
          id: el.id,
        };
      });
    });
  return breeds;
};

const getFilteredPics = async (limit, order, breed_id) => {
  let pics = null;
  await fetch(
    `https://api.thecatapi.com/v1/breeds?limit=${limit}&order=${order}&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      pics = data.map((el) => {
        return {
          name: el.name,
          id: el.id,
          img_id: el.reference_image_id,
        };
      });
    });
  return pics;
};

const getFilteredBreedPics = async (breed_id) => {
  let pics = null;
  await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      pics = {
        name: data[0].breeds[0].name,
        id: data[0].breeds[0].id,
        img_id: data[0].breeds[0].reference_image_id,
      };
    });

  return pics;
};

export { getBreedsList, getFilteredPics, getFilteredBreedPics };
