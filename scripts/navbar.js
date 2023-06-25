const liste = document.querySelector(".liste");
const btnResponsive = document.querySelector(".btn-responsive");

btnResponsive.addEventListener("click", () => {
  liste.classList.toggle("show");
});


function adjustNav() {
  if (window.innerWidth <= 768) {
    btnResponsive.style.display = "block";
    liste.classList.remove("show"); 
  } else {
    btnResponsive.style.display = "none";
    liste.classList.remove("show");
  }
}

window.addEventListener("resize", adjustNav);
adjustNav();
