export default async function SearchForBreed(name) {
  let isCorrect = null;
  await fetch("https://api.thecatapi.com/v1/breeds/")
    .then((response) => response.json())
    .then((data) => {
      data.map((el) => {
        if (el.name.toLowerCase().includes(name)) {
          isCorrect = true;
        }
      });
    });

  return isCorrect;
}
