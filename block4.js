///////внесение денег//////
function Deposite() {
  const errorMessage = document.querySelector(".block-4__error-message");
  const Input = document.querySelector("#block-4__deposit-input").value;
  if (Input === "") {
    errorMessage.textContent = "Введите сумму!";
    return;
  }
  if (Input < 100) {
    errorMessage.textContent = "Сумма должна быть не менее 100!";
    return;
  } else {
    errorMessage.textContent = "";
  }
}
document.querySelector(".block-4__goal-button").onclick = Deposite;

///////прогресс бар///////
// const progressBar = document.getElementsByClassName("block-4__progress-bar-active");

// function updateProgressBar(value) {
//   progressBar.style.width = value + "%";
// }

// updateProgressBar(25);
