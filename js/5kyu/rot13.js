function rot13(message) {
  return message
    .split("")
    .map((letter, i) => {
      let code = message.charCodeAt(i);
      if (letter.match(/[a-z]/)) {
        code = code + 13 > 122 ? code + 13 - 122 + 96 : code + 13;
        return String.fromCharCode(code);
      } else if (letter.match(/[A-Z]/)) {
        code = code + 13 > 90 ? code + 13 - 90 + 64 : code + 13;
        return String.fromCharCode(code);
      } else return letter;
    })
    .join("");
}

console.log(rot13("Test"));
