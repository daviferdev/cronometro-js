function criaContagem(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-br", {
    hour12: false,
    timeZone: "UTC",
  });
}

const relogio = document.querySelector(".container__relogio");
const btnIniciar = document.querySelector(".btn-iniciar");
const btnPausar = document.querySelector(".btn-pausar");
const btnZerar = document.querySelector(".btn-zerar");
let segundos = 1;
let tempo;

function iniciarRelogio() {
 tempo = setInterval(() => {
    const contagem = criaContagem(segundos);
    segundos++;
    relogio.innerHTML = contagem;
    console.log(contagem);    
  }, 1000);
}

btnIniciar.addEventListener("click", () => {
  relogio.classList.remove("red");
  iniciarRelogio();
});

btnPausar.addEventListener("click", () => {
  clearInterval(tempo);
  relogio.classList.add("red");
});

btnZerar.addEventListener("click", () => {
  clearInterval(tempo);
  relogio.classList.remove("red");
  relogio.innerHTML = "00:00:00";
  segundos = 1;
});
