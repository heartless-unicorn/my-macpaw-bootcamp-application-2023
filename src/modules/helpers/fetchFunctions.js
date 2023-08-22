async function getDefaultGridPics() {
  let pics = null;
  await fetch("https://api.thecatapi.com/v1/breeds?limit=10")
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
}

async function getBreedsList() {
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
}
export { getDefaultGridPics, getBreedsList };
