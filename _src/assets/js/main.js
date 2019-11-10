"use strict";
import getData from "./module/getData.js";
import Recipe from "./module/Recipe.js";

class App {
  constructor() {
    this.recipe = [];
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  getData = getData;

  renderRecipes(recipe) {
    recipe.ingredients.forEach((ingredient, index) => {
      recipe.createIngredient(ingredient, index);
    });
  }

  renderCard() {
    const { createChart, items, sendCharges, subtotal, total } = app.recipe;
    createChart(items, subtotal, sendCharges, total);
  }

  async initApp() {
    const data = await this.getData();
    this.recipe = new Recipe(data);
    this.renderRecipes(this.recipe);
    this.renderCard();
    this.addCheckBoxEvent();
    this.addInputEvent();
  }

  clearRecipe() {
    document.querySelector(".buy-section").innerHTML = "";
    document.querySelector(".ingredients").innerHTML = "";
  }

  updateApp() {
    this.clearRecipe();
    this.renderRecipes(this.recipe);
    this.renderCard();
    this.addCheckBoxEvent();
    this.addInputEvent();
  }

  getNewIngredients(e, num) {
    const element = e.target.parentElement.parentElement;
    const newIngredients = num =>
      this.recipe.ingredients.map(item => {
        if (item.id === parseInt(element.id)) {
          item.items = num;
          item.cost = num * item.price;
        }
        return item;
      });
    return newIngredients(num)
  }

  onChangeCheckBox(e) {
    if (!e.target.checked) {
      this.recipe.ingredients = this.getNewIngredients(e, 0);
    } else {
      this.recipe.ingredients = this.getNewIngredients(e, 1);
    }
    this.updateApp();
  }

  addCheckBoxEvent() {
    document
      .querySelectorAll(".item__checkbox")
      .forEach(input =>
        input.addEventListener("change", this.onChangeCheckBox)
      );
  }

  onChangeInput(e) {
    this.recipe.ingredient = this.getNewIngredients(e, e.target.value);
    this.updateApp();
  }

  addInputEvent() {
    document
      .querySelectorAll(".item__items")
      .forEach(input => input.addEventListener("change", this.onChangeInput));
  }
}

const app = new App();

app.initApp();
