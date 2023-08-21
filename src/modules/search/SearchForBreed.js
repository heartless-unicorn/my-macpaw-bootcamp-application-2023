import { useState } from "react";

export default async function SearchForBreed(name) {
  let isCorrect = null;
  console.log(isCorrect);
  await fetch("https://api.thecatapi.com/v1/breeds/")
    .then((response) => response.json())
    .then((data) => {
      data.map((el, id) => {
        if (el.name.toLowerCase().includes(name)) {
          console.log(el);
          isCorrect = true;
        }
      });
    });

  return isCorrect;
}
