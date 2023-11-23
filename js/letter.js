function repeatingLetter(sentence = "") {
  const letters = {};

  sentence = sentence.toLowerCase().replace(" ", "");
  for (let letter of sentence) {
    if (letter in letters) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }

  let letter;
  let app = 0;
  for (let key in letters) {
    if (letters[key] > app) {
      app = letters[key];
      letter = key;
    }
  }

  return letter;
}

console.log(repeatingLetter("Banana"));
