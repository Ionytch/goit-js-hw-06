const buttonColor = document.querySelector('button.change-color')
const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('span.color');

buttonColor.addEventListener('click', () => {
  
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const color = getRandomHexColor();
  spanColor.textContent = color;
  bodyColor.style.backgroundColor = color;
});

