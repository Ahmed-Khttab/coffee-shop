
const navgation = document.querySelector(".navgation");

const btnNavbar = document.querySelector(".btn-navbar")

btnNavbar.addEventListener("click" , ()=>{
    navgation.classList.toggle("active");
})

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
});







var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

