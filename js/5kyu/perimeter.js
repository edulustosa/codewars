// https://www.codewars.com/kata/559a28007caad2ac4e000083/

function perimeter(p) {
  if (p <= 0) return 4;

  const fib = (n) => {
    let n1 = 1;
    let n2 = 1;
    let sum = n1 + n2;
    let n3;

    for (let i = 0; i < n - 2; i++) {
      n3 = n1 + n2;
      sum += n3;
      n1 = n2;
      n2 = n3;
    }

    return sum;
  };

  return 4 * fib(p + 1);
}

console.log(perimeter(7));
