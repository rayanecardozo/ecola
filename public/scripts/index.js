const buttonSearch = document.querySelectorAll("#page-home > div > main > a");
const modal = document.querySelector("#modal");
const close = document.querySelector("#modal .header a");

// Abre o modal quando o botão é clicado
buttonSearch[0].addEventListener("click", () => {
    modal.classList.remove("hide");
});

// Fecha o modal quando o botão X é clicado
close.addEventListener("click", () => {
    modal.classList.add("hide");
});