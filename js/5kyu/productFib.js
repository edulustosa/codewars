function productFib(prod) {
  let a, b;
  let n = 0;

  do {
    a = fib(n);
    b = fib(n + 1);
    if (a * b === prod) return [a, b, true];
    n++;
  } while (a * b < prod);

  return [a, b, false];
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(productFib(74049690));
