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
const music = document.getElementById('music');
const keySound = document.getElementById('keySound');


const fields = [
    { element: firstName, message: 'Please enter your name' },
    { element: email, message: 'Please enter your email' },
    { element: password, message: 'Please enter your password' }
];


window.addEventListener("DOMContentLoaded", event => {
    // music.volume = 0;
    music.volume = 0.2;
  });

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

function checkPasswords() {
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;

    if(!confirmPasswordValue){
        password.style.border = '1px solid green';
    } 
    else if (passwordValue != confirmPasswordValue) {
        password.style.border = '3px solid red';
        confirmPassword.style.border = '3px solid red';
    } 
    else {
        password.style.border = '1px solid green';
        confirmPassword.style.border = '1px solid green';
    }
}

function finalPasswordCheck() {
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
    checkPasswords();
    if (passwordValue != confirmPasswordValue) {
        alert('Passwords do not match')
        return true
    }
}

// Listen if someone submits!
form.addEventListener('submit', function (event) {
    if (checkIfEmpty() || checkLenght() || finalPasswordCheck()) {
        event.preventDefault();
    }
});


function playSound(audioElement) {
    audioElement.currentTime = 0; 
    audioElement.play(); 
    console.log('sound');
}

// listen when someone types
confirmPassword.addEventListener('input', function () {
    playSound(keySound)
});

fields.forEach(field => {
    field.element.addEventListener('input', function () {
        music.play();
        playSound(keySound);
    });
});


empireSelect.addEventListener('change', function() {
    const empireSelected = this.value;
    
    if (empireSelected.trim() === 'Chunjo') {
        console.log('Wybrano:', empireSelected);
        empireSelect.style.color = 'yellow';
    }
    else if (empireSelected.trim() === 'Jinno') {
        console.log('Wybrano:', empireSelected);
        empireSelect.style.color = 'blue';

    }
    else if (empireSelected.trim() === 'Shinsoo') {
        console.log('Wybrano:', empireSelected);
        empireSelect.style.color = 'red';

    }
});
