import createIngredient from "./createIngredient.js";
import Ingredient from "./Ingredient.js";

export default class Ingredients {
  constructor(ingredients) {
    this.ingredients = ingredients.map(
      (ingredient, index) => new Ingredient(ingredient, index)
    );
  }

  createIngredient = createIngredient;

  renderIngredients(ingredients, currency) {
    ingredients.forEach(ingredient => {
      this.createIngredient(ingredient, currency);
    });
  }
}
