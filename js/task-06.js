// const textInput = document.querySelector("#validation-input");
// const inputLength = document.querySelector('input[data-length="6"]');
// const styleValid = document.querySelector('#validation-input.valid');
// const styleInvalid = document.querySelector('#validation-input.invalid');
// const styles = document.querySelectorAll('style');
// console.log(inputLength.dataset.length);
// textInput.addEventListener("blur", (event) => {
//     console.log(event.currentTarget.value.length);
//     if (event.currentTarget.value.length === inputLength.dataset.length) {
//         textInput.classList.remove('#validation-input.valid');
//     textInput.classList.add('#validation-input.invalid');
//         // textInput.style.borderColor=styleValid;
//    } else {textInput.style.border=styleInvalid;};
    
// });

document.getElementById("validation-input").onblur = function() {
  console.log(this.value.length);
  if (this.getAttribute('data-length') = this.value.length) { 
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};