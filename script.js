"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MOVE_AFTER_CLICKS = 7;
const MAX_IMAGES = 7;

let play = true;
let noCount = 0;
const SPEED = 2;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
      if (noCount === MOVE_AFTER_CLICKS) {
        moveButtonRandomlyContinuously();
      }
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

let movementInterval;

function moveButtonRandomlyContinuously() {
  movementInterval = setInterval(function () {
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  }, SPEED);
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Nah...*Ne click pas dessus midget*",
    "Bruh...je te dis de pas cliquer",
    "Wait really tu veux pas ?",
    "Please j'ai plus de d'idee pour les autres images si tu dis encore non",
    "Tu est vraiment tetu enfaite toi la",
    "tu sais que je peux continuer des heures aussi hein ?",
    "Tu est vraiment tetu enfaite toi la ? Ok passons au chose serieuse HEHEHE",
    "HEHE CAN'T TOUCH THIS",
  ];



  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}