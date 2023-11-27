function towerBuilder(nFloors) {
  const tower = [];
  
  for (let i = 0; i < nFloors; i++) {
    let floor = "";
    for (let j = 0; j < nFloors - i - 1; j++) floor += " ";

    for (let k = 0; k < 2 * i + 1; k++) floor += "*";

    for (let l = 0; l < nFloors - i - 1; l++) floor += " ";

    tower.push(floor);
  }

  return tower;
}

console.log(towerBuilder(10));
