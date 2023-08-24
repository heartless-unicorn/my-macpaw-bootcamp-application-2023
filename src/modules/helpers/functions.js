import { useDispatch } from "react-redux";

const manageGridBlockData = (arr, amount) => {
  console.log(arr);
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
  } else if (vote === "favourite") {
    action = "ADD_TO_FAVORITE";
  }
  return {
    type: action,
    payload: {
      id,
    },
  };
};
const editTime = (date) => {
  let hours = date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}`;
};
export { manageGridBlockData, addPicToStore, editTime };
