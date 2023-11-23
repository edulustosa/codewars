function findOdd(numbers) {
  const counts = new Map();

  for (let n of numbers) {
    if (counts.has(n)) {
      counts.set(n, counts.get(n) + 1);
    } else {
      counts.set(n, 1);
    }
  }

  let biggestCount = 0;
  let num;
  counts.forEach((count, n) => {
    if (count % 2 !== 0) {
      if (count > biggestCount) {
        biggestCount = count;
        num = n;
      }
    }
  });

  return num;
}

console.log(findOdd([0, 1, 0, 1, 0, 1, 1, 1]));
