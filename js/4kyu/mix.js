// https://www.codewars.com/kata/5629db57620258aa9d000014

function mix(s1, s2) {
  const letters = [];

  const s1Letters = {};
  for (let letter of s1) {
    if (/[a-z]/.test(letter)) {
      if (!letters.includes(letter)) letters.push(letter);
      s1Letters[letter] = (s1Letters[letter] || 0) + 1;
    }
  }

  const s2Letters = {};
  for (let letter of s2) {
    if (/[a-z]/.test(letter)) {
      if (!letters.includes(letter)) letters.push(letter);
      s2Letters[letter] = (s2Letters[letter] || 0) + 1;
    }
  }

  const result = {};
  for (let letter of letters) {
    if (!s1Letters[letter]) {
      if (s2Letters[letter] === 1) continue;
      result[`2:${letter.repeat(s2Letters[letter])}`] = s2Letters[letter];
      continue;
    }
    
    if (!s2Letters[letter]) {
      if (s1Letters[letter] === 1) continue;
      result[`1:${letter.repeat(s1Letters[letter])}`] = s1Letters[letter];
      continue;
    }

    if (s1Letters[letter] > s2Letters[letter]) {
      result[`1:${letter.repeat(s1Letters[letter])}`] = s1Letters[letter];
    } else if (s1Letters[letter] < s2Letters[letter]) {
      result[`2:${letter.repeat(s2Letters[letter])}`] = s2Letters[letter];
    } else {
      if (s1Letters[letter] === 1 || s2Letters[letter] === 1) continue;
      result[`=:${letter.repeat(s1Letters[letter])}`] = s1Letters[letter];
    }
  }

  return Object.keys(result)
    .sort()
    .sort((a, b) => result[b] - result[a])
    .join("/");
}

console.log(mix("Lords of the Fallen", "gamekult"));
