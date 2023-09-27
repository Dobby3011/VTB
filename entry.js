const error = document.getElementById('errorMessage');
const formEntrance = document.forms.formEntrance;
const login = formEntrance.elements.login;
const password = formEntrance.elements.password;

formEntrance.addEventListener('submit', function (event) {
  event.preventDefault();

  if (login.value.trim() === '') {
    error.textContent = "Необходимо заполнить поле логин!"
  }
  if (password.value.trim() === '') {
    error.textContent = "Введите пароль!"
  }
  if ((login.value.trim() === '') && (password.value.trim() === '')) {
    error.textContent = "Заполните поля!"
  }
  if (login.value.trim() === 'admin' && password.value.trim() === 'password') {
    window.location.href = '/home';
  } else {
    error.textContent = 'Неправильное имя пользователя или пароль. Пожалуйста, попробуйте еще раз.';
  }
  formEntrance.reset();
});









