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
    })
    .catch(() =>
      console.log("Error has occured while fetching list of breeds")
    );
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
    })
    .catch(() =>
      console.log(
        "Error has occured while fetching cat pictures based on Filters"
      )
    );
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
    })
    .catch(() => console.log("Error has occured when fetching breed pictures"));

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
    })
    .catch(() =>
      console.log("Error has occured while fetching gallery pictures")
    );
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
    })
    .catch(() =>
      console.log("Error has occured while fetching individual picture")
    );

  return picture;
};

const fetchForBreed = async (name) => {
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
    })
    .catch(() => console.log("Error has occured while searching for breed"));

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
    })
    .catch(() =>
      console.log("Error has occured while searching for breed info")
    );

  return info;
};

const fetchUploadUserPic = async (file) => {
  let result = null;
  const form = new FormData();
  form.append("file", file);

  await fetch("https://api.thecatapi.com/v1/images/upload", {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
    },
    body: form,
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        result = true;
      } else {
        result = false;
      }
    })
    .catch(() => console.log("Error has occured while uploading an Image"));
  return result;
};

export {
  fetchBreedsList,
  fetchFilteredPics,
  fetchBreedPics,
  fetchGalleryPics,
  fetchRandomImg,
  fetchForBreed,
  fetchBreedById,
  fetchUploadUserPic,
};
