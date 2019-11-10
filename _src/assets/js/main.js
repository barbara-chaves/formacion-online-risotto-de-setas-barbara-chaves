"use strict";
import getData from "./modules/getData.js";
import Ingredients from "./modules/Ingredients.js";
import Chart from "./modules/Chart.js";

class App {
  constructor() {
    this.ingredients = [];
    this.chart = {};
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  getData = getData;

  async initApp() {
    const data = await this.getData();
    this.ingredients = new Ingredients(data.ingredients);
    this.chart = new Chart(data, this.ingredients.ingredients);
    this.ingredients.renderIngredients(this.ingredients.ingredients, this.chart.currency);
    this.chart.renderChart(this.chart);
    this.addEvents();
  }

  clearApp() {
    document.querySelector(".buy-section").innerHTML = "";
    document.querySelector(".ingredients").innerHTML = "";
  }

  updateApp() {
    this.clearApp();
    this.ingredients.renderIngredients(this.ingredients.ingredients, this.chart.currency);
    this.chart.renderChart(this.chart);
    this.addEvents();
  }

  getNewIngredients(e, num, ischeked = true) {
    const element = e.target.parentElement.parentElement;
    const newIngredients = num =>
      this.ingredients.ingredients.map(item => {
        if (item.id === parseInt(element.id)) {
          item.items = num;
          item.check = ischeked;
        }
        return item;
      });
    return newIngredients(num);
  }

  onChangeCheckBox(e) {
    if (!e.target.checked) {
      this.ingredients.ingredients = this.getNewIngredients(e, 0, false);
    } else {
      this.ingredients.ingredients = this.getNewIngredients(e, 1);
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
    this.ingredients.ingredient = this.getNewIngredients(e, e.target.value);
    this.updateApp();
  }

  addInputEvent() {
    document
      .querySelectorAll(".item__items")
      .forEach(input => input.addEventListener("change", this.onChangeInput));
  }

  onSelect(e, ischeked, items) {
    this.ingredients.ingredients.map(item => {
      item.check = ischeked;
      item.items = items;
      return item;
    });
    this.updateApp();
  }

  addSelectAllEvent() {
    document
      .querySelector("#select-all")
      .addEventListener("click", e => this.onSelect(e, true, 1));
    document
      .querySelector("#deselect-all")
      .addEventListener("click", e => this.onSelect(e, false, 0));
  }

  addEvents() {
    this.addInputEvent();
    this.addCheckBoxEvent();
    this.addSelectAllEvent();
  }
}

const app = new App();

app.initApp();
