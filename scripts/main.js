import { productsTab } from "./productsTab.js";

const btnFilter = document.querySelectorAll(".btnFilter");

btnFilter.forEach((button) =>
  button.addEventListener("click", (e) => {
    const category = e.target.value;
    if (category === "all") {
      displayProducts(productsTab);
    } else {
      const filteredByCat = productsTab.filter((product) => product.cat === category);
      displayProducts(filteredByCat);
    }
  })
);

function displayProducts(products) {
  const selectionContainer = document.querySelector("#selection .cards");
  selectionContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.mark;
    figure.appendChild(img);
    card.appendChild(figure);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const title = document.createElement("h3");
    title.textContent = product.mark;
    const ref = document.createElement("h4");
    ref.textContent = `Référence: ${product.ref}`;
    cardContent.appendChild(ref);

    const description = document.createElement("p");
    description.classList.add("detail");
    description.textContent = product.description;
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    card.appendChild(cardContent);

    const btnMoreContainer = document.createElement("div");
    btnMoreContainer.classList.add("btnMore-container");

    const btnCat = document.createElement("a");
    btnCat.href = "#";
    btnCat.classList.add("btnMore");
    btnCat.textContent = product.cat;
    btnCat.alt = product.cat;
    btnCat.ariaLabel = product.cat;
    btnCat.title = product.cat;
    btnCat.style.backgroundColor = product.backgroundButton;
    btnMoreContainer.appendChild(btnCat);
    card.appendChild(btnMoreContainer);

    const btnPrice = document.createElement("a");
    btnPrice.href = "#contact";
    btnPrice.classList.add("btnPrice");
    btnPrice.textContent = `${product.price}€`;
    btnMoreContainer.appendChild(btnPrice);
    card.appendChild(btnMoreContainer);

    const btnViewMoreContainer = document.createElement("div");
    btnViewMoreContainer.classList.add("container-ViewMore");
    card.appendChild(btnViewMoreContainer);

    const viewMore = document.createElement("button");
    viewMore.type = "button";
    const viewMoreId = `btn_${Date.now()}`;
    viewMore.setAttribute("id", viewMoreId);
    viewMore.textContent = "En savoir plus";
    viewMore.classList.add("btnViewMore");
    viewMore.addEventListener("click", handleClick);
    btnViewMoreContainer.appendChild(viewMore);

    selectionContainer.appendChild(card);
  });
}

function handleClick(event) {
  const detailProduct = event.target.parentNode.parentNode.querySelector("p.detail");
  if (detailProduct.classList.contains("show")) {
    detailProduct.classList.remove("show");
  } else {
    detailProduct.classList.add("show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selectionContainer = document.querySelector("#selection .cards");
  const filter = document.querySelector(".filter");
  const btnShowFilter = document.querySelector(".btnShowFilter");

  displayProducts(productsTab);

  btnShowFilter.addEventListener("click", () => {
    filter.classList.toggle("showFilter");
  });
});
