let amountContainer = document.querySelector(".block-4__amount");
let priorityContainer = document.querySelector(".block-4__priority");
let deadlineContainer = document.querySelector(".block-4__deadline");
let startDateContainer = document.querySelector(".block-4__startDate");
let endDateContainer = document.querySelector(".block-4__endDate");
let goalImage = document.querySelector(".block-4__goal-image");

document.addEventListener("DOMContentLoaded", function () {
  const goalJSON = localStorage.getItem("goalObj");
  objectGoal = JSON.parse(goalJSON);
  let amountText = document.createElement("p");
  amountContainer.appendChild(amountText);
  amountText.innerHTML = `${objectGoal.amount}`;
});

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
