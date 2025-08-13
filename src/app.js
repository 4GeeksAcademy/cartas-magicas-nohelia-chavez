import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Arrays con los valores y palos de las cartas
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = ["♣", "♦", "♠", "♥"];
  const suitClass = ["club", "diamond", "spade", "heart"];

  //inputs
  const card = document.querySelector("#card");
  const wInp = document.querySelector("#width");
  const hInp = document.querySelector("#height");

  function aplicar() {
    card.style.width = ((parseInt(wInp.value, 10) || 300)) + "px";
    card.style.height = ((parseInt(hInp.value, 10) || 400)) + "px";
  }

  wInp.addEventListener("input", aplicar);
  hInp.addEventListener("input", aplicar);
  aplicar(); // tamaño inicial


  // Función para generar una carta aleatoria
  function generateCard() {
    const value = values[Math.floor(Math.random() * values.length)];
    const suitIndex = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIndex];
    const className = suitClass[suitIndex];



    //  Mostrar los datos en el HTML
    document.querySelector("#top-suit").innerText = suit;
    document.querySelector("#card-value").innerText = value;
    document.querySelector("#bottom-suit").innerText = suit;

    // Aplicar clase del palo o suit
    const card = document.querySelector("#card");
    card.className = "card " + className;
  }

  // 1. Boton opcional
  const btnNueva = document.querySelector("#btnNueva");
  btnNueva.addEventListener("click", generateCard);

  // 2. Temporizador opcional

  generateCard();
  setInterval(generateCard, 10000); // ← cada 10.000 ms (10 s) genera otra

  generateCard(); // Generar una carta al cargar la página
};
