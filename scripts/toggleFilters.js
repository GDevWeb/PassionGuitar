const toggleFilters = () => {
  const filter = document.querySelector(".filter");
  const btnShowFilter = document.querySelector(".btnShowFilter");
  
  btnShowFilter.addEventListener("click", () => {
    filter.classList.toggle("show");
  });
};

export { toggleFilters };
