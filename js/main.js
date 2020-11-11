// Scroll --------------------------------------------
ScrollOut({
    targets: '.r,h1,a,div,p,img'
});
window.addEventListener("scroll", () => {
    if (pageYOffset > 500) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-100%";
    }
});

let cards = document.querySelectorAll(".card");

for (let card of cards) {
    let met = document.querySelector(".met");
    card.addEventListener("click", () => {
        card.classList.toggle("expand");
        card.classList.toggle("card")
        met.classList.toggle("mett");
    });
};
