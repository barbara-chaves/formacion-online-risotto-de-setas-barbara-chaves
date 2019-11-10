export default async function getData() {
  let recipe = await fetch(
    "https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json"
  );
  recipe = await recipe.json();
  return await recipe.recipe;
}
