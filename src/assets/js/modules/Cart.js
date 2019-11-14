import createCart from "./createCart.js";

export default class Cart {
  constructor(recipe, ingredients) {
    this._ingredients = ingredients;
    this._recipe = recipe;
    this.createCart = createCart;
  }

  get currency() {
    return this._recipe.currency
  }

  get shippingCost() {
    return parseFloat(this._recipe["shipping-cost"]).toFixed(2)
  }
 
  get items() {
    return this._ingredients.reduce(
      (acc, recipe) => acc + parseInt(recipe.items),
      0
    );
  }

  get subtotal() {
    let subtotal = this._ingredients.reduce(
      (acc, item) => acc + parseFloat(item.cost) * item.items,
      0
    )
    return parseFloat(subtotal).toFixed(2);
  }
  
  get total() {
    let total = parseFloat(this.subtotal) + parseFloat(this.shippingCost);
    return parseFloat(total).toFixed(2);
  }


  renderCart(cart) {
    createCart(cart);
  }
}