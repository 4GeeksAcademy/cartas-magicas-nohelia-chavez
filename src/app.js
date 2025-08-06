import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Arrays con los valores y palos de las cartas
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = ["♣", "♦", "♠", "♥"];
  const suitClass = ["club", "diamond", "spade", "heart"];

  // Función para generar una carta aleatoria
  function generateCard() {
    const value = values[Math.floor(Math.random() * values.length)];
    const suitIndex = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIndex];
    const className = suitClass[suitIndex];

    // Mostrar los datos en el HTML
    document.getElementById("top-suit").innerText = suit;
    document.getElementById("card-value").innerText = value;
    document.getElementById("bottom-suit").innerText = suit;

    // Aplica clase general + clase de color del palo
    const card = document.getElementById("card");
    card.className = "card " + className;
  }

  generateCard(); // Generar una carta al cargar la página
};
