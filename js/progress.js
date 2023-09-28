const goalsElement = document.querySelector('.goals');

const goalString = window.localStorage.getItem('goal');
const goal = JSON.parse(goalString);

let count = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    if(goal) {
      const goalCount = createGoal();
      window.localStorage.setItem(`goal-${goalCount}`, JSON.stringify(goal));
      window.localStorage.removeItem('goal');
    }
});  

function createGoal() {
  count += 1;
  const newGoal = document.createElement('div');
  newGoal.classList.add('goals__item');
  newGoal.innerHTML = `<h4 class="goals__name">${goal.name}</h4> <p class="goals__progress">Прогресс цели</p> <div id="progress" class="goals__progressBar"><div id="progressContent-${count}" class="goals__progressBar_content">
  <span class="goals__progressBar_text" id="progressText-${count}"></span>
</div></div><div class="goals__bottom"><div class="goals__money-left"><span class="goals__left">Осталось собрать: </span><span class="goals__amount">10 тыс</span></div><button class="goals__btn" type="button">&gt;</button></div>`;
  goalsElement.append(newGoal);
  return count;
}

//const goal1 = createGoal();
//const goal2 = createGoal();

function updateProgressBarContent(percent, goalCount) {
  let progressBarContent = document.querySelector(`#progressContent-${goalCount}`);
  const progressBarText = document.querySelector(`#progressText-${goalCount}`);
  progressBarText.textContent = percent + '%';
  progressBarContent.style.width = percent + '%';
  if (percent <= 10) {
    progressBarContent.style.backgroundColor = '#DF2216';
  } else if (percent > 10 && percent < 70) {
    progressBarContent.style.backgroundColor = '#B6CC2D';
  } else if (percent >= 70) {
    progressBarContent.style.backgroundColor = '#50DB3A';
  } 
}

//updateProgressBarContent(45, goal1);
//pdateProgressBarContent(70, goal2);