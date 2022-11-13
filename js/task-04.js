const counter = document.querySelector('#value');
let counterValue = 0;
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
console.log(counter.textContent);


buttonDecr.addEventListener("click", function () {
    counterValue -= 1; console.log(counterValue);counter.textContent = counterValue;
});

buttonIncr.addEventListener("click", function () {
    counterValue += 1; console.log(counterValue);counter.textContent = counterValue;
});

