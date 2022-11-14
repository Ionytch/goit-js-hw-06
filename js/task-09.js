const buttonColor = document.querySelector('button.change-color')
const bodyColor = document.querySelector('body');
buttonColor.addEventListener('click', () => {
  return bodyColor.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;



}
