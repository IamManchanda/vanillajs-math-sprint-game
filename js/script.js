const gamePage = document.getElementById("game-page");
const scorePage = document.getElementById("score-page");
const splashPage = document.getElementById("splash-page");
const countdownPage = document.getElementById("countdown-page");
const startForm = document.getElementById("start-form");
const wrongButton = document.getElementById("wrong-button");
const rightButton = document.getElementById("right-button");
const radioContainers = document.querySelectorAll(".radio-container");
const radioInputs = document.querySelectorAll("input");
const bestScores = document.querySelectorAll(".best-score-value");
const countdown = document.querySelector(".countdown");
const itemContainer = document.querySelector(".item-container");
const finalTimeEl = document.querySelector(".final-time");
const baseTimeEl = document.querySelector(".base-time");
const penaltyTimeEl = document.querySelector(".penalty-time");
const playAgainBtn = document.querySelector(".play-again");

let questionAmount = 0;
let equationsArray = [];
let playerGuessArray = [];
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];
let valueY = 0;

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function storeUserSelection(guessedTrue) {
  console.log(playerGuessArray);
  valueY += 80;
  itemContainer.scroll(0, valueY);
  return playerGuessArray.push(String(guessedTrue));
}

function showGamePage() {
  gamePage.hidden = false;
  countdownPage.hidden = true;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createEquations() {
  const correctEquations = getRandomNumber(questionAmount);
  const wrongEquations = questionAmount - correctEquations;
  for (let i = 0; i < correctEquations; i++) {
    firstNumber = getRandomNumber(9);
    secondNumber = getRandomNumber(9);
    const equationValue = firstNumber * secondNumber;
    const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
    equationObject = { value: equation, evaluated: "true" };
    equationsArray.push(equationObject);
  }
  for (let i = 0; i < wrongEquations; i++) {
    firstNumber = getRandomNumber(9);
    secondNumber = getRandomNumber(9);
    const equationValue = firstNumber * secondNumber;
    wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
    wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
    wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
    const formatChoice = getRandomNumber(3);
    const equation = wrongFormat[formatChoice];
    equationObject = { value: equation, evaluated: "false" };
    equationsArray.push(equationObject);
  }
  shuffle(equationsArray);
  console.log({ equationsArray });
}

function equationsToDOM() {
  equationsArray.forEach((equation) => {
    const item = document.createElement("div");
    item.classList.add("item");
    const equationsText = document.createElement("h1");
    equationsText.textContent = equation.value;
    item.appendChild(equationsText);
    itemContainer.appendChild(item);
  });
}

function populateGamePage() {
  itemContainer.textContent = "";
  const topSpacer = document.createElement("div");
  topSpacer.classList.add("height-240");
  const selectedItem = document.createElement("div");
  selectedItem.classList.add("selected-item");
  itemContainer.append(topSpacer, selectedItem);
  createEquations();
  equationsToDOM();
  const bottomSpacer = document.createElement("div");
  bottomSpacer.classList.add("height-500");
  itemContainer.appendChild(bottomSpacer);
}

function countdownStart() {
  countdown.textContent = "3";
  setTimeout(() => {
    countdown.textContent = "2";
  }, 1000);
  setTimeout(() => {
    countdown.textContent = "1";
  }, 2000);
  setTimeout(() => {
    countdown.textContent = "GO!";
  }, 3000);
}

function showCountdown() {
  countdownPage.hidden = false;
  splashPage.hidden = true;
  countdownStart();
  populateGamePage();
  // Change the timeout value in production to 4000
  setTimeout(showGamePage, 400);
}

function getRadioValue() {
  let radioValue;
  radioInputs.forEach((radioInput) => {
    if (radioInput.checked) {
      radioValue = radioInput.value;
    }
  });
  return radioValue;
}

function selectQuestion() {
  radioContainers.forEach((radioEl) => {
    radioEl.classList.remove("selected-label");
    if (radioEl.children[1].checked) {
      radioEl.classList.add("selected-label");
    }
  });
}

function selectQuestionAmount(event) {
  event.preventDefault();
  questionAmount = getRadioValue();
  if (questionAmount) {
    questionAmount = Number(questionAmount);
    showCountdown();
  }
}

startForm.addEventListener("click", selectQuestion);
startForm.addEventListener("submit", selectQuestionAmount);
wrongButton.addEventListener("click", () => {
  storeUserSelection(false);
});
rightButton.addEventListener("click", () => {
  storeUserSelection(true);
});
