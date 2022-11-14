const buttonColor = document.querySelector('button.change-color')
const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('span.color');
buttonColor.addEventListener('click', () => {
  spanColor.textContent = getRandomHexColor();
  return bodyColor.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;



}
