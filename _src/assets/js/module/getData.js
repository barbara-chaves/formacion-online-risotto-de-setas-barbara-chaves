function formatData(data) {
  const ingredients = data.recipe.ingredients.map((item, index) => {
    return {
      ...item,
      id: index,
      cost: item.price * item.items
    };
  });

  return {
    ...data.recipe,
    ingredients
  };
}

export default async function getData() {
  let recipe = await fetch(
    "https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json"
  );
  recipe = await recipe.json();
  return await formatData(recipe);
}
