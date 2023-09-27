document.getElementById("goalForm").addEventListener("submit", saveGoal);
document.getElementById("saveButton").addEventListener("submit", saveGoal)
document.getElementById("cancelButton").addEventListener("click", cancelGoal);
document.getElementById("topUpButton").addEventListener("click", topUpGoal);

function saveGoal(event) {
  event.preventDefault();

  let goal = document.getElementById("goalInput").value;
  let amount = document.getElementById("sumInput").value;
  let priority = document.getElementById("prioritySelect").value;
  let deadline = document.getElementById("deadlineSelect").value;
  let startDate = document.getElementById("startDateInput").value;
  let endDate = document.getElementById("endDateInput").value;

  console.log("Сохранена цель: " + goal);
  console.log("Сумма для накопления: " + amount);
  console.log("Приоритет: " + priority);
  console.log("Приоритет по срокам: " + deadline);
  console.log("Дата начала накопления: " + startDate);
  console.log("Дата окончания накопления: " + endDate);
}

function cancelGoal() {
  document.getElementById("goalForm").reset();
  console.log("Данные отменены");
}

function topUpGoal() {
  let deposit = document.getElementById("depositInput").value;
  console.log("Пополнение на сумму: " + deposit);
}


const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = function(e) {
    const img = document.createElement('img');
    img.src = e.target.result;
    imagePreview.appendChild(img);
  }

  reader.readAsDataURL(file);
});

const backButton = document.getElementById('back');
backButton.addEventListener('click', function() {
  window.history.back();
});