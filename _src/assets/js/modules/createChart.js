const buy = document.querySelector(".buy-section");

export default function createChart({currency, items, subtotal, shippingCost, total}) {
  const chart = document.createElement("div");
  chart.classList.add("chart");
  chart.innerHTML = `<div class="container total">
      <small id="items">
        <span >Items: </span>
        ${items}
      </small>
      <p class='d-flex justify-content-between' id="subtotal">
        <span>Subtotal </span>
        ${subtotal}${currency}
      </p>
      <p class='d-flex justify-content-between' id="send-charges">
        <span>Gastos de envío: </span> 
        ${shippingCost}${currency}
      </p>
      <p class='d-flex justify-content-between' id="total">
        <span>Total: </span>
        ${total}${currency}
      </p>
      <button class="btn btn-success" id="buy">Comprar ingredienes ${total}${currency}</button>
    </div>`;
  buy.appendChild(chart);
}
