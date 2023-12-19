function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0;
    const possibleCakes = Math.floor(
      available[ingredient] / recipe[ingredient]
    );
    if (possibleCakes < maxCakes) maxCakes = possibleCakes;
  }

  return maxCakes;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
