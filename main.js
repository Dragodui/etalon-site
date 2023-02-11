let inputs = document.querySelectorAll(".form__input");
let btn = document.querySelector("#btn");
function clearInputs() {
    inputs.forEach(input => {
        input.value = "";
    });
}
btn.addEventListener("click", clearInputs);