const API_KEY =
  "live_KFI6LB7w6qzReMGnCyNwSPHqXw00jkLK5V0dmEd0PwwCuDP4IjBnBs7ZnqVq7Gw6";

const fetchBreedsList = async () => {
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

const fetchFilteredPics = async (limit, order) => {
  let pics = null;
  await fetch(
    `https://api.thecatapi.com/v1/breeds?limit=${limit}&order=${order}&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      pics = data.map((el) => {
        const img_id = el.reference_image_id;
        return {
          name: el.name,
          id: el.id,
          img_url: `https://cdn2.thecatapi.com/images/${img_id}.jpg`,
        };
      });
    });
  return pics;
};

const fetchBreedPics = async (breed_id) => {
  let pics = null;
  await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}&limit=10&api_key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      pics = data.map((el) => {
        return {
          name: el.breeds[0].name,
          id: el.breeds[0].id,
          img_url: el.url,
        };
      });
    });

  return pics;
};

const fetchGalleryPics = async (limit, order, type) => {
  let pics = null;
  await fetch(
    ` https://api.thecatapi.com/v1/images/search?limit=${limit}&order=${order}&api_key=${API_KEY}&mime_types=${type}`
  )
    .then((response) => response.json())
    .then((data) => {
      pics = data.map((el) => {
        return {
          id: el.id,
          img_url: el.url,
        };
      });
    });
  return pics;
};
const fetchRandomImg = async () => {
  let picture = null;
  await fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      picture = {
        id: data[0].id,
        img_url: data[0].url,
      };
    });

  return picture;
};

const searchForBreed = async (name) => {
  let cats = [];
  await fetch("https://api.thecatapi.com/v1/breeds/")
    .then((response) => response.json())
    .then((data) => {
      data.map((el) => {
        if (el.name.toLowerCase().includes(name)) {
          const img_id = el.reference_image_id;
          cats.push({
            name: el.name,
            id: el.id,
            img_url: `https://cdn2.thecatapi.com/images/${img_id}.jpg`,
          });
        }
      });
    });

  return cats.length > 0 ? cats : null;
};

const fetchBreedById = async (id) => {
  let info = {};
  await fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
    .then((response) => response.json())
    .then((data) => {
      info = {
        pic: `https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`,
        name: data.name,
        temper: data.temperament,
        origin: data.origin,
        weight: data.weight.metric,
        lifespan: data.life_span,
      };
    });

  return info;
};
export {
  fetchBreedsList,
  fetchFilteredPics,
  fetchBreedPics,
  fetchGalleryPics,
  fetchRandomImg,
  searchForBreed,
  fetchBreedById,
};
