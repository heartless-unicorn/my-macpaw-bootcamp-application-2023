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

export { manageGridBlockData };
