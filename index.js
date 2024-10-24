var passwordInput = document.getElementById('password-input');
var passwordTitle = document.getElementById('enterPassword');

function enterPassword() {
  let passwordValue = passwordInput.value;

  if (passwordValue === 'Alexa22') {
    window.location.href = 'alexa.html';
  } else {
    passwordTitle.innerText = 'Wrong Password, try again!'
  }
}
