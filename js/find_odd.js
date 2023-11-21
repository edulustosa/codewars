function findOdd(numbers) {
  let previousCount = 0;
  let odd;

  numbers.forEach((num) => {
    const count = numbers.filter((n) => n === num).length;
    if (count % 2 !== 0) {
      if (count > previousCount) {
        previousCount = count;
        odd = num;
      }
    }
  });

  return odd;
}

console.log(findOdd([0, 1, 0, 1, 0]));
