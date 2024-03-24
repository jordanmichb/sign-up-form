const form = document.querySelector('#form');
const password = document.querySelector('#password'); 
const passwordConfirm = document.querySelector('#password-confirm');
const passwordAlert = document.querySelector('.alert');

passwordConfirm.addEventListener('input', () => {
    if (password.value !== passwordConfirm.value && passwordConfirm.value) {
        passwordConfirm.classList.remove('valid');
        passwordConfirm.classList.add('invalid');
        passwordAlert.style.visibility = 'visible';
    }
    else {
        passwordConfirm.classList.remove('invalid');
        passwordConfirm.classList.add('valid');
        passwordAlert.style.visibility = 'hidden';
    }
});

password.addEventListener('input', () => {
    if (password.value !== passwordConfirm.value && passwordConfirm.value) {
        passwordConfirm.classList.remove('valid');
        passwordConfirm.classList.add('invalid');
        passwordAlert.style.visibility = 'visible';
    }
    else {
        passwordConfirm.classList.remove('invalid');
        passwordConfirm.classList.add('valid');
        passwordAlert.style.visibility = 'hidden';
    }
});

form.addEventListener('submit', (e) => {
    if (password.value !== passwordConfirm.value) {
        e.preventDefault();
    }
});