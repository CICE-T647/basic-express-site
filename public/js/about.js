const button = document.querySelector(".click-button");

function showPopUp() {
    document.querySelector(".popup").classList.remove("hidden");
    button.classList.add("hidden");
}
button.addEventListener("click", showPopUp);

function yes() {
    document.querySelector(".arch-img").classList.remove("hidden");
    document.querySelector(".popup").classList.add("hidden");
}
function no() {
    document.querySelector(".click-no").click();
}
document.querySelector(".yes").addEventListener("click", yes);
document.querySelector(".no").addEventListener("click", no);
