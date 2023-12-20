function solution(list) {
  const range = [];

  while (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i + 1] === list[i] + 1) {
        let deleteCount = 0;
        for (let j = i; list[j + 1] === list[j] + 1; j++) {
          deleteCount++;
        }

        if (deleteCount < 2) {
          range.push(list.splice(i, 1)[0].toString());
          break;
        }

        const numRange = list.splice(i, deleteCount + 1);
        range.push([numRange[0], numRange[numRange.length - 1]].join("-"));
        break;
      } else {
        range.push(list.splice(i, 1)[0].toString());
        break;
      }
    }
  }

  return range.join(",");
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
