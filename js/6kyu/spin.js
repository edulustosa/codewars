function spinWords(string) {
  const words = string.split(" ");
  const reverse = words.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }

    return word;
  });

  return reverse.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
