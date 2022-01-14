const filterForm = document.getElementById("filter-form");

filterForm.onchange = handleChange;

function handleChange(e) {
  const tags = [];
  const inputs = filterForm.querySelectorAll("[name='tags']");
  inputs.forEach((input) => {
    if (input.checked) {
      tags.push(input.value);
    }
  });

  getSneakers(tags)
    .then((res) => {
      displaySneakers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function sneakerCard(sneaker) {
  let card = `<a href="/one-product/${sneaker._id}" class="product-item-wrapper">
    <div class="product-img">
        <img src="${sneaker.image}" alt="${sneaker.name} : what a nice pair of kicks">
    </div>
    <p class="product-name">${sneaker.name}</p>
    <p class="product-cat">${sneaker.category}</p>
    <p class="product-price">${sneaker.price}</p>  
      `;
  let list = "<ul class='product-list'>";
  sneaker.id_tags.forEach((tag) => {
    list += `<li class="item">${tag.label}</li>`;
  });
  card += list + `</ul>`;
  return card + `</a>`;
}

function displaySneakers(sneakers) {
  const container = document.getElementById("products_grid");
  container.innerHTML = "";
  sneakers.forEach((sneaker) => {
    container.innerHTML += sneakerCard(sneaker);
  });
}

function getSneakers(tags) {
  return axios.get("/api" + window.location.pathname, {
    params: {
      // axios.get(url, options)
      tags: tags, // This params option object
    }, // will be sent as a query parameter // query string.
  });
}
