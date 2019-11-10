const ingredients = document.querySelector(".ingredients");

export default function createIngredient({
  product,
  brand,
  items,
  quantity,
  cost,
  id,
  checked
}, currency) {
  const isChecked = () => checked ? "checked" : "";
  const ingredient = document.createElement("li");
  ingredient.classList.add("list-group");

  ingredient.innerHTML = (
    `<div id=${id} class="row item">
      <div class="col-1">
        <input class='item__checkbox' type="checkbox" ${isChecked()}  />
      </div>
      <div class="col-2">
        <input class='item__items' type="number" min='0' value=${parseInt(
          items
        )} style="width: 40px"/>
      </div>
      <div class="col-5">
        <div class='row'>
          <p class='item__name'>${product}</p>
        </div>
        <div class='row'>
          ${brand ? `<small class='item__brand'>${brand}</small>` : ""}
        </div>
        <div class='row'>
          <small class='item__quantity'>${quantity}</small>
        </div>
      </div>
      <div class='col-4' >
        <p class='text-right item__price'>${cost}${currency}</p>
      </div>
    </div>
   `);
  ingredients.appendChild(ingredient);
}
