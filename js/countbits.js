const countBits = function (n) {
  let bits = n.toString(2);
  let sum = 0;
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === "1") sum++;
  }

  return sum;
};
