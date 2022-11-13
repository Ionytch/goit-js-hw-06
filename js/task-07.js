const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
input.addEventListener("input", (e) => {
    spanText.style.fontSize=e.currentTarget.value+"px"
})