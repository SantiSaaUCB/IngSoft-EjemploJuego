import calcular_puntaje from "./juego";

const infoMarcador = document.querySelector("#info-marcador");
const infoJuego = document.querySelector("#info-juego");
const Player1Button = document.getElementById("player1-button");
const Player2Button = document.getElementById("player2-button");

Player1Button.addEventListener("click", (event) => {
  event.preventDefault();
});

Player2Button.addEventListener("click", (event) => {
  event.preventDefault();
});