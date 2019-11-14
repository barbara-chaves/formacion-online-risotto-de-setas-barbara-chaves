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
  ingredient.classList.add("list-group-item", "p-2");

  ingredient.innerHTML = (
    `<div id=${id} class="row item">
      <div class="col-1 ml-2 p-0 d-flex justify-content-center align-items-center">
        <input class='item__checkbox' type="checkbox" ${isChecked()}  />
      </div>
      <div class="col-1 p-0 d-flex align-items-center">
        <input class='item__items text-primary text-center' type="number" min='0' value=${parseInt(
          items
        )} style="width: 30px; heigth: 30px" />
      </div>
      <div class="col-4">
        <div class='row'>
          <p class='item__name m-0'>${product}</p>
        </div>
        <div class='row'>
          ${brand ? `<small class='item__brand'>${brand}</small>` : ""}
        </div>
        <div class='row'>
          <small class='item__quantity'>${quantity}</small>
        </div>
      </div>
      <div class='col-5 pr-5  d-flex justify-content-end align-items-center' >
        <p class='text-right item__price m-0 text-success'>${cost} ${currency}</p>
      </div>
    </div>
   `);
  ingredients.appendChild(ingredient);
}
