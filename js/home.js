let progressBar = document.querySelector('#progress');
let progressBarContent = document.querySelector('#progressContent');

function updateProgressBarContent(percent) {
  progressBarContent.style.width = percent + '%';
}