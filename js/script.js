const gamePage = document.getElementById("game-page");
const scorePage = document.getElementById("score-page");
const splashPage = document.getElementById("splash-page");
const countdownPage = document.getElementById("countdown-page");
const startForm = document.getElementById("start-form");
const radioContainers = document.querySelectorAll(".radio-container");
const radioInputs = document.querySelectorAll("input");
const bestScores = document.querySelectorAll(".best-score-value");
const countdown = document.querySelector(".countdown");
const itemContainer = document.querySelector(".item-container");
const finalTimeEl = document.querySelector(".final-time");
const baseTimeEl = document.querySelector(".base-time");
const penaltyTimeEl = document.querySelector(".penalty-time");
const playAgainBtn = document.querySelector(".play-again");

let equationsArray = [];
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

/* 
function createEquations() {
  const correctEquations = null;
  const wrongEquations = null;
  for (let i = 0; i < correctEquations; i++) {
    firstNumber = null;
    secondNumber = null;
    const equationValue = firstNumber * secondNumber;
    const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
    equationObject = { value: equation, evaluated: "true" };
    equationsArray.push(equationObject);
  }
  for (let i = 0; i < wrongEquations; i++) {
    firstNumber = null;
    secondNumber = null;
    const equationValue = firstNumber * secondNumber;
    wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
    wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
    wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
    const formatChoice = null;
    const equation = wrongFormat[formatChoice];
    equationObject = { value: equation, evaluated: "false" };
    equationsArray.push(equationObject);
  }
}
*/

/* 
function populateGamePage() {
  itemContainer.textContent = "";
  const topSpacer = document.createElement("div");
  topSpacer.classList.add("height-240");
  const selectedItem = document.createElement("div");
  selectedItem.classList.add("selected-item");
  itemContainer.append(topSpacer, selectedItem);
  const bottomSpacer = document.createElement("div");
  bottomSpacer.classList.add("height-500");
  itemContainer.appendChild(bottomSpacer);
}
*/
