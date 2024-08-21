const btn = document.getElementById("botao");
const txt = document.getElementById("txt");
let sushisComidos = 0;

btn.addEventListener('click', clicar);

function clicar() {
    sushisComidos += 1;
    txt.innerText = "Você comeu " + sushisComidos + " Sushis!";
}