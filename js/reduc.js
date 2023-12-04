function dirReduc(arr = []) {
  let flag = false;

  do {
    flag = false;

    arr.forEach((dir, i) => {
      switch (dir) {
        case "NORTH":
          if (arr[i + 1] === "SOUTH") {
            arr.splice(i, 2);
            flag = true;
          }
          break;
        case "SOUTH":
          if (arr[i + 1] === "NORTH") {
            arr.splice(i, 2);
            flag = true;
          }
          break;
        case "EAST":
          if (arr[i + 1] === "WEST") {
            arr.splice(i, 2);
            flag = true;
          }
          break;
        case "WEST":
          if (arr[i + 1] === "EAST") {
            arr.splice(i, 2);
            flag = true;
          }
          break;
      }
    });
  } while (flag);

  return arr;
}

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
