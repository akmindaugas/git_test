// console.log('Hello, world!');
var emailInput = document.getElementById('user-email');
var passwordInput = document.getElementById('user-password');
var mainButton = document.getElementById('main-btn');

mainButton.addEventListener('DOMContentLoaded', function () {
    console.log('Button was clicked');
    var userLoginData = {
        email: emailInput.value,
        password: passwordInput.value
    };
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // sauktukas pakeicia verte ir true i false: codas vykdomas jeigu reiksme yra bloga, false. priesingu atveju cokas nebus paleidziamas
    if (!emailRegex.test(userLoginData.email) === false) {
        console.log('email is not valid');
        return;
    }
    ;
    if (userLoginData.password.length <= 8) {
        console.log('password must be 8+ characters long');
        return;
    }
    ;
    console.log('all good');
});
