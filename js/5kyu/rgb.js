function rgb(r, g, b) {
  let hex = "#";

  for (let color of [r, g, b]) {
    let quo, rest;

    if (color < 0) {
      quo = "0";
      rest = "0";
    } else if (color > 255) {
      quo = "F";
      rest = "F";
    } else {
      quo = Math.floor(color / 16)
        .toString(16)
        .toUpperCase();
      rest = Math.floor(color % 16)
        .toString(16)
        .toUpperCase();
    }

    hex += quo + rest;
  }

  return hex;
}

console.log(rgb(237, 69, 55));
