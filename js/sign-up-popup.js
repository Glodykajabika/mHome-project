
const signUpPopup = this.document.querySelector('.sign-up');
const logInPopup = this.document.querySelector('.log-in');
const btnSignUp = this.document.querySelector('.option--sign-up');
const btnLogIn = this.document.querySelector('.option--log-in');
const formBox = this.document.querySelector('.sign-up__box');
const btnBackSign = document.querySelector('.btn-sign');
const btnBackLog = document.querySelector('.btn-log');


btnSignUp.addEventListener('click', function () {
    formBox.classList.add('hide');
    signUpPopup.classList.add('show-popup');
})

btnLogIn.addEventListener('click', function () {
    formBox.classList.add('hide');
    logInPopup.classList.add('show-popup');
})

btnBackSign.addEventListener('click', function() {
    formBox.classList.remove('hide');
    signUpPopup.classList.remove('show-popup');
})

btnBackLog.addEventListener('click', function() {
    formBox.classList.remove('hide');
    logInPopup.classList.remove('show-popup');
})
