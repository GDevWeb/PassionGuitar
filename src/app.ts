// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById(
  "mobile-menu-btn"
) as HTMLButtonElement | null;
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const guitarCards = document.querySelectorAll(".guitar-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function (this: HTMLButtonElement) {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    guitarCards.forEach((card) => {
      if (
        filter === "all" ||
        (card as HTMLElement).getAttribute("data-category") === filter
      ) {
        (card as HTMLElement).style.display = "block";
        setTimeout(() => {
          (card as HTMLElement).style.opacity = "1";
          (card as HTMLElement).style.transform = "scale(1)";
        }, 10);
      } else {
        (card as HTMLElement).style.opacity = "0";
        (card as HTMLElement).style.transform = "scale(0.8)";
        setTimeout(() => {
          (card as HTMLElement).style.display = "none";
        }, 300);
      }
    });
  });
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn?.classList.remove("opacity-0", "invisible");
    backToTopBtn?.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn?.classList.add("opacity-0", "invisible");
    backToTopBtn?.classList.remove("opacity-100", "visible");
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener(
    "click",
    function (this: HTMLAnchorElement | null, e) {
      e.preventDefault();
      if (!this) {
        return;
      }
      const target = document.querySelector(
        this.getAttribute("href") as string
      );
      if (target) {
        const offsetTop = (target as HTMLElement).offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        mobileMenu?.classList.add("hidden");
      }
    }
  );
});

// Form submission
const contactForm = document.querySelector(
  ".contact-form"
) as HTMLFormElement | null;
contactForm?.addEventListener(
  "submit",
  function (this: HTMLFormElement, e: Event): void {
    e.preventDefault();

    // Simple form validation feedback
    const submitBtn = this.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message envoyé !';
      submitBtn.classList.add("bg-green-500", "hover:bg-green-600");

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove("bg-green-500", "hover:bg-green-600");
        this.reset();
      }, 2000);
    }, 1500);
  }
);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      (entry.target as HTMLElement).style.opacity = "1";
      (entry.target as HTMLElement).style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(".animate-slide-up, .animate-scale, .animate-fade-in")
  .forEach((el) => {
    (el as HTMLElement).style.opacity = "0";
    (el as HTMLElement).style.transform = "translateY(30px)";
    (el as HTMLElement).style.transition =
      "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  });
