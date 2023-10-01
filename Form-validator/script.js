const form = document.getElementById('form');
const phone = document.getElementById('phone');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid';
}

function checkEmail(input){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(input.value)) {
            success(input);
        }
        else {
            error(input, 'e-mail does not meet the requirements');
        }
  };

function checkRequired(inputs) {

    inputs.forEach(function (input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        }
        else {
            success(input);
        }
    });  
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        error(input, `${input.id} username must be at least ${min} characters`);
    }
    else if(input.value.length > max) {
        error(input, `${input.id} username must a maximum ${max} characters`);
    }
    else {
        success(input);
    }
}

function checkPassword(input1, input2){
    if(input1.value !== input2.value) {
        error(input2, 'Password is do not match')
    }
}

function checkPhone(input) {
    var exp =  /^\d{10}$/;
    if(!exp.test(input.value)) {
        error(input, 'phone number must be 10 characters')
    }
    else {
        success(input)
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 15);
    checkPassword(password,repassword);
    checkPhone(phone);
});