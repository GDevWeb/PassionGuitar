import { productsTab } from "./productsTab.js";

console.log(productsTab);

document.addEventListener("DOMContentLoaded", () => {
  const selectionContainer = document.querySelector("#products .cards");

  productsTab.forEach((product) => {
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
    ref.textContent = `Reference : ${product.ref}`;
    cardContent.appendChild(ref)
    
    const description = document.createElement("p");
    description.textContent = product.description;
    cardContent.appendChild(title);
    cardContent.appendChild(description);
    card.appendChild(cardContent);

    const btnMoreContainer = document.createElement("div");
    btnMoreContainer.classList.add("btnMore-container");

    const btnCat = document.createElement("a");
    btnCat.href = "#";
    btnCat.classList.add("btnMore");
    btnCat.textContent = `${product.cat}`;
    btnCat.style.backgroundColor = `${product.backgroundButton}`
    btnMoreContainer.appendChild(btnCat);
    card.appendChild(btnMoreContainer);

    const btnPrice = document.createElement("a");
    btnPrice.href = "#";
    btnPrice.classList.add("btnPrice");
    btnPrice.textContent = `${product.price}€`;
    btnMoreContainer.appendChild(btnPrice);
    card.appendChild(btnMoreContainer);


    selectionContainer.appendChild(card);
  });
});

// const allBTnCat = document.querySelectorAll("btnPrice");
// allBTnCat.forEach((button) => button.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log("click");
// } ))
