let amountContainer = document.querySelector(".block-4__amount");
let priorityContainer = document.querySelector(".block-4__priority");
let deadlineContainer = document.querySelector(".block-4__deadline");
let startDateContainer = document.querySelector(".block-4__startDate");
let endDateContainer = document.querySelector(".block-4__endDate");
let goalImage = document.querySelector(".block-4__goal-image");

document.addEventListener("DOMContentLoaded", function () {
  // const goalJSON = localStorage.getItem("goalObj");
  // objectGoal = JSON.parse(goalJSON);
  let amount = 50000;
  let amountText = document.createElement("p");
  amountContainer.appendChild(amountText);
  amountText.classList.add("block-4__data-info");
  amountText.innerHTML = `${amount}₽`;
});

///////внесение денег//////
function Deposite() {
  const errorMessage = document.querySelector(".block-4__error-message");
  const Input = document.querySelector("#block-4__deposit-input").value;

  ///проверки на внесение суммы///
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
  ////история операций///
  const progressCards = document.querySelector(".block-4__cards");
  let progressCard = document.createElement("div");
  let progressText = document.createElement("p");
  progressCards.append(progressCard);
  progressCard.classList.add(
    "col-3",
    "m-1",
    "block-4__progress-card",
    "rounded-2"
  );
  progressCard.append(progressText);
  progressText.innerHTML = `+${Input}₽`;

  ////прогресс бар////
  const progressBar = document.querySelector("#block-4__progressbar");
  let amount = 50000;
  value = Math.round((Input * 100) / amount);
  progressBar.setAttribute("value", value);
  console.log(value);
}

document.querySelector(".block-4__goal-button").onclick = Deposite;
