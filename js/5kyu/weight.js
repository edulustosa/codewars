// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

function orderWeight(string) {
  return string
    .split(" ")
    .sort((a, b) => {
      const w1 = a.split("").reduce((sum, n) => sum + parseInt(n), 0);
      const w2 = b.split("").reduce((sum, n) => sum + parseInt(n), 0);

      if (w1 !== w2) return w1 - w2;

      return a.localeCompare(b);
    })
    .join(" ");
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
