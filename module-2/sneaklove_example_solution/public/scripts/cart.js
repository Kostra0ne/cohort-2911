const btnAdd = document.getElementById("btn-add-to-cart");
const sizeInput = document.getElementById("size");
btnAdd.onclick = handleAdd;

function handleAdd(e) {
  if (sizeInput.value === -1) return;

  const size = sizeInput.value;
  const sneakerId = btnAdd.getAttribute("data-productid");

  axios
    .post("/api/cart", { sneakerId, size })
    .then((apiResponse) => {
      const itemsCount = apiResponse.data.itemsCount;
      const cartItems = document.querySelector(".cart-items");
      cartItems.textContent = itemsCount;
    })
    .catch((apiErr) => {
      console.log(apiErr);
    });
}
