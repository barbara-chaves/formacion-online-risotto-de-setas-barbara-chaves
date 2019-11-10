const buy = document.querySelector(".buy-section");

export default function createChart({currency, items, subtotal, shippingCost, total}) {
  const chart = document.createElement("div");
  chart.classList.add("chart", "card-body", "pr-5", "pl-5");
  chart.innerHTML = `<div class="total">
      <div class='pb-4'>
        <small id="items">
          <span >Items: </span>
          ${items}
        </small>
      </div>
      <p class='d-flex justify-content-between' id="subtotal">
        <span>Subtotal </span>
        ${subtotal} ${currency}
      </p>
      <p class='d-flex justify-content-between' id="send-charges">
        <span>Gastos de envío </span> 
        ${shippingCost} ${currency}
      </p>
      <p class='d-flex justify-content-between' id="total">
        Total 
        <span class='h5 text-success'>${total} ${currency}</span>
      </p>
      <div d-flex align-items-stretch>
        <button class="btn btn-success w-100" id="buy">Comprar ingredienes: ${total} ${currency}</button>
      </div>
    </div>`;
  buy.appendChild(chart);
}
