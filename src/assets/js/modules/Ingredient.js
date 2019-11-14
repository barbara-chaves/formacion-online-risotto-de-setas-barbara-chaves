export default class Ingredient {
  constructor(ingredient, index) {
    this.brand = ingredient.brand || "";
    this.items = ingredient.items;
    this.price = ingredient.price;
    this.product = ingredient.product;
    this.quantity = ingredient.quantity;
    this.id = index;
    this.checked = true;
  }
  

  set check(ischecked) {
    this.checked = ischecked;
  }

  get cost() {
    return (this.price * this.items).toFixed(2);
  }
}
