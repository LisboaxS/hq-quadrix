
const qtd = document.getElementById("quantidade");

let valor = 0;

document.querySelector(".mais").addEventListener("click", () => {
    valor++;
    qtd.textContent = valor;
});

document.querySelector(".menos").addEventListener("click", () => {
    if(valor > 0){
        valor--;
        qtd.textContent = valor;
    }
});