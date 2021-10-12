const card = document.getElementsById("flip-card")
card.addEventListener("click",flipCard);
function flipCard() {
    card.classList.toggle("flipCard");
}
