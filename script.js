// Cath all them all!
const form = document.querySelector('form');
const firstName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const classSelect = document.getElementsByName('class')[0];
const genderMale = document.getElementById('male');
const genderFemale = document.getElementById('female');
const empireSelect = document.getElementsByName('empire')[0];
const submitButton = document.querySelector('.submit input');


const fields = [
    { element: firstName, message: 'Please enter your name' },
    { element: email, message: 'Please enter your email' },
    { element: password, message: 'Please enter your password' }
];


function checkIfEmpty() {
    for (const field of fields) {
        if (field.element.value.trim() === '') {
            alert(field.message);
            return true;
            }
    }
    return false;
}


function checkLenght(){
    if (password.value.trim().length  < 6) {
        alert('Password must be at least 6 characters long');
        return true;
    }
}

// Listen if someone submits!
form.addEventListener('submit', function (event) {
    if (checkIfEmpty() || checkLenght()) {
        event.preventDefault();
    }
});


// listen when someone types
firstName.addEventListener('input', function () {

});

