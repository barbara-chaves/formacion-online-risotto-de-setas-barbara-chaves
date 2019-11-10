import createIngredient from './createIngredient.js'
import createChart from './createChart.js'

export default 
class Recipe {
  constructor(recipe) {
    this.shippingCost = recipe['shipping-cost'];
    this.ingredients = recipe.ingredients;
  }
  
  get items(){
    return this.ingredients.reduce((acc, recipe) => acc + parseInt(recipe.items), 0);
  }

  get subtotal() {
    return this.ingredients.reduce((acc, item) => acc + parseFloat(item.cost) * item.items, 0 )
  }
  
  get sendCharges() {
    return parseFloat(this.shippingCost)
  }
  
  get total() {
    return this.subtotal + this.sendCharges
  }

  createIngredient = createIngredient;

  createChart = createChart;
  
}