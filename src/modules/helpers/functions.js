import { createContext } from "react";

const SourceContext = createContext(null);

const manageGridBlockData = (arr, amount) => {
  const arrCopy = [...arr];
  const newArr = [];
  for (let i = 0; i < amount; i++) {
    const part = arrCopy.splice(0, 5);
    newArr.push(part);
  }
  return newArr;
};
const addPicToStore = (id, vote) => {
  let action = null;

  console.log(id, vote);
  if (vote === "like") {
    action = "ADD_TO_LIKES";
  } else if (vote === "dislike") {
    action = "ADD_TO_DISLIKES";
  } else if (vote === "favorite") {
    action = "ADD_TO_FAVORITE";
  } else if (vote === "remove") {
    action = "REMOVE_FROM_FAVORITE";
  }
  return {
    type: action,
    payload: id,
  };
};
const editTime = (date) => {
  let hours = date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
};

export { SourceContext, manageGridBlockData, addPicToStore, editTime };
