window.addEventListener("scroll", () => {
    if (pageYOffset > 500) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-100%";
    }
});