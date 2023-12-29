// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/

function solution(text, markers) {
  for (let marker of markers) {
    while (text.includes(marker)) {
      const start =
        text[text.indexOf(marker) - 1] === " "
          ? text.indexOf(marker) - 1
          : text.indexOf(marker);
      const end = text.includes("\n", start)
        ? text.indexOf("\n", start)
        : text.length;
      const slice = text.slice(start, end);

      text = text.replace(slice, "");
    }
  }

  text = text
    .split("\n")
    .map((word) => (word.endsWith(" ") ? word.slice(0, -1) : word))
    .join("\n");

  if (text.endsWith(" ")) {
    for (let i = text.length - 1; i >= 0; i--) {
      if (text[i] === " ") text = text.slice(0, i);
      else break;
    }
  }

  return text;
}

console.log(
  solution("eLlH \n %FLTKx\noSfMP#yRc-qiix$SU%^Z", [
    "*",
    "!",
    "#",
    "@",
    "\\",
    "^",
  ])
);
