function solution(str) {
  const pairs = [];

  for (let i = 0; i < str.length; i += 2) {
    let letters = str.slice(i, i + 2);
    letters = letters.length > 1 ? letters : letters + "_";
    pairs.push(letters);
  }

  return pairs;
}

console.log(solution("abcdefghi"))
