const inputsNode = document.querySelectorAll("input");
const inputs = [...inputsNode];
const btn = document.querySelector(".entrar");

inputs.forEach((input) => {
  input.oninput = () => {
    changeButtonState();

    if (input.value.length > 0) {
      input.classList.add("active");
    } else {
      input.classList.remove("active");
    }
  };
});

function changeButtonState() {
  const emptyInput = inputs.find((input) => input.value.length == 0);

  btn.disabled = emptyInput ? true : false;
}
