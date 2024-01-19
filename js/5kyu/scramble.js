// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/

function scramble(str1, str2) {
  const letters1 = {};
  for (let letter of str1) {
    if (letter in letters1) {
      letters1[letter] += 1;
    } else letters1[letter] = 1;
  }

  const letters2 = {};
  for (let letter of str2) {
    if (letter in letters2) {
      letters2[letter] += 1;
    } else letters2[letter] = 1;
  }

  for (let letter in letters2) {
    if (!(letter in letters1) || letters1[letter] < letters2[letter]) {
      return false;
    }
  }

  return true;
}

console.log(scramble("katas", "steak"));
