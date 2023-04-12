import _, { eachRight } from 'lodash'
import './style.css'

const submitBtn = document.getElementById('submit');
const formEl = document.querySelector('#formEl');
const emailInput = document.querySelector('#email');
const emailValidator = document.querySelector('#email-validator');
const countryInput = document.querySelector('#country');
const countryValidator = document.querySelector('#country-validator');
const zipcodeInput = document.querySelector('#zipcode');
const zipcodeValidator = document.querySelector('#zipcode-validator');
const passwordInput = document.querySelector('#password');
const passwordValidator = document.querySelector('#password-validator');
const password2Input = document.querySelector('#password2');
const password2Validator = document.querySelector('#password2-validator');

emailInput.addEventListener('keyup', (e) => {
    emailInput.setCustomValidity('');
    if (!emailInput.checkValidity(e)) {
        emailInput.setCustomValidity('Email must contain @');
        emailInput.classList.remove('valid');
        emailValidator.textContent = "Email format required: example@example";
        emailValidator.style.backgroundColor = 'gray';
    } else {
        emailInput.setCustomValidity('');
        emailInput.classList.add('valid');
        emailInput.style.border="2px solid black";
        emailValidator.textContent = "Email correct!";
        emailValidator.style.backgroundColor = 'green';
    }
});

countryInput.addEventListener('keyup', (e) => {
    countryInput.setCustomValidity('');
    if (!countryInput.checkValidity(e)) {
        countryInput.setCustomValidity('Email must contain @');
        countryInput.classList.remove('valid');
        countryValidator.textContent = "Minimum 3 letters required";
        countryValidator.style.backgroundColor = 'gray';
    } else {
        countryInput.setCustomValidity('');
        countryInput.classList.add('valid');
        countryInput.style.border="2px solid black";
        countryValidator.textContent = "Country correct!";
        countryValidator.style.backgroundColor = 'green';
    }
});

zipcodeInput.addEventListener('keyup', (e) => {
       zipcodeInput.setCustomValidity('');
    if (!zipcodeInput.checkValidity(e)) {
        zipcodeInput.setCustomValidity('Email must contain @');
        zipcodeInput.classList.remove('valid');
        zipcodeValidator.textContent = "Zip code format XX-XXX";
        zipcodeValidator.style.backgroundColor = 'gray';
    } else {
        zipcodeInput.setCustomValidity('');
        zipcodeInput.classList.add('valid');
        zipcodeInput.style.border="2px solid black";
        zipcodeValidator.textContent = "Zipcode correct!";
        zipcodeValidator.style.backgroundColor = 'green';
    }
});


passwordInput.addEventListener('keyup', (e) => {
    let password1 = passwordInput.value;
    let password2 = password2Input.value;
    password2Input.setCustomValidity('Passwords must match');
    password2Input.classList.remove('valid');
     password2Validator.textContent = "Passwords must match";
     password2Validator.style.backgroundColor = 'gray';
    passwordInput.setCustomValidity('');

 if (!passwordInput.checkValidity(e)) {
    passwordInput.setCustomValidity('Email must contain @');
    passwordInput.classList.remove('valid');
     passwordValidator.textContent = "Minimum 8 letters required, one letter, one number";
     passwordValidator.style.backgroundColor = 'gray';
     
 } else {
    passwordInput.setCustomValidity('');
    passwordInput.classList.add('valid');
    passwordInput.style.border="2px solid black";
    passwordValidator.textContent = "Password correct!";
     passwordValidator.style.backgroundColor = 'green';
     if(password1==password2){
        password2Input.setCustomValidity('');
    password2Input.classList.add('valid');
        password2Validator.textContent = "Passwords are correct!";
        password2Validator.style.backgroundColor = 'green';
     }
 }
});

password2Input.addEventListener('keyup', (e) => {
password2Input.setCustomValidity('');
let password1 = passwordInput.value;
console.log(password1);
if (password2Input.value!=password1) {
    password2Input.setCustomValidity('Email must contain @');
    password2Input.classList.remove('valid');
     password2Validator.textContent = "Passwords must match";
     password2Validator.style.backgroundColor = 'gray';
 } else {
    password2Input.setCustomValidity('');
    password2Input.classList.add('valid');
    password2Input.style.border="2px solid black";
    password2Validator.textContent = "Passwords are correct!";
     password2Validator.style.backgroundColor = 'green';
 }
});





function validateForm(event) {
    const formData = new FormData(formEl);
    event.preventDefault();
    if(formEl.checkValidity()){
        alert('All correct, high five!')
    }
    else {
        console.log('notyet')
    }
}

submitBtn.addEventListener('click', validateForm)