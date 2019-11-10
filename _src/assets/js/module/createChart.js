const buy = document.querySelector(".buy-section")

export default function createChart(items, subtotal, sendCharges, total) {
  const chart = document.createElement("div");
  chart.classList.add("chart");
  chart.innerHTML = `<div class="container total">
    <small id="items">items: ${items}</small>
    <p id="subtotal">Subtotal ${subtotal}</p>
    <p id="send-charges">Gastos de envío ${sendCharges}</p>
    <p id="total">Total ${total}</p>
    <button id="buy">Comprar ingredienes ${total}€</button>
    </div>`;
  buy.appendChild(chart);
}

