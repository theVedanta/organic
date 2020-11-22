
window.addEventListener("scroll", () => {
    if (pageYOffset > 500) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-100%";
    }
});

let clickHam = document.querySelector(".wholeHam");
let ham = document.querySelector(".ham");
let side = document.querySelector(".side");

clickHam.addEventListener("click", () => {
    ham.classList.toggle("hamActive");
    side.classList.toggle("sideActive")
});
