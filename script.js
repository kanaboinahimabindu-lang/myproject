console.log("Website Loaded");
const exploreBtn = document.getElementById("exploreBtn");
const popup = document.getElementById("popup");

exploreBtn.addEventListener("click", () => {
    popup.classList.toggle("active");
});