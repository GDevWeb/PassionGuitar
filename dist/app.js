import productsTab from "./productsTab.js";
// Assurez-vous que btnFilter est correctement sélectionné
const btnFilter = document.querySelectorAll(".btnFilter");
btnFilter.forEach((button) => {
    console.log("Attaching event to button:", button); // Log pour vérifier si les boutons existent
    button.addEventListener("click", (e) => {
        console.log("Button clicked");
        const target = e.target;
        if (!target) {
            return;
        }
        const category = target.value;
        console.log("Category:", category); // Log pour vérifier la catégorie
        if (category === "all") {
            displayProducts(productsTab);
        }
        else {
            const filteredByCat = productsTab.filter((product) => product.category === category);
            displayProducts(filteredByCat);
        }
    });
});
function displayProducts(products) {
    const selectionContainer = document.querySelector("#selection .cards");
    if (!selectionContainer)
        return;
    selectionContainer.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.make;
        figure.appendChild(img);
        card.appendChild(figure);
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        const title = document.createElement("h3");
        title.textContent = product.make;
        const reference = document.createElement("h4");
        reference.textContent = `Référence: ${product.reference}`;
        cardContent.appendChild(reference);
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
        btnCat.textContent = product.category;
        btnCat.style.backgroundColor = product.backgroundColorButton;
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
    const target = event.target;
    if (!target)
        return;
    const detailProduct = target.closest(".card")?.querySelector("p.detail");
    if (!detailProduct)
        return;
    detailProduct.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", () => {
    const filter = document.querySelector(".filter");
    const btnShowFilter = document.querySelector(".btnShowFilter");
    displayProducts(productsTab);
    btnShowFilter?.addEventListener("click", () => {
        filter?.classList.toggle("showFilter");
    });
});
