// https://www.codewars.com/kata/525f4206b73515bffb000b21/javascript

function add(a, b) {
  const sum = [];
  const bigger = a.length >= b.length ? a : b;
  const smallest = b.length <= a.length ? b : a;
  let carry = 0;

  for (let i = bigger.length - 1, j = smallest.length - 1; i >= 0; i--, j--) {
    let currentSum;

    const x = parseInt(bigger[i]);
    const y = parseInt(smallest[j]);

    if (!isNaN(x) && !isNaN(y)) currentSum = x + carry + y;
    else if (!isNaN(x)) currentSum = x + carry;
    else if (!isNaN(y)) currentSum = y + carry;

    if (currentSum > 9) {
      carry = Math.floor(currentSum / 10);
      sum.unshift(Math.floor(currentSum % 10));
    } else {
      carry = 0;
      sum.unshift(currentSum);
    }
  }

  if (carry > 0) sum.unshift(carry);

  return sum.join('');
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
