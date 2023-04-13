const form = document.querySelector('form');
let passOne = document.getElementById('user_password');
let passTwo = document.getElementById('user_password_confirm');

form.addEventListener('submit', (e) =>{
    if (passOne.value !== passTwo.value){
        e.preventDefault();
        passOne.classList.add('error_pass');
        passTwo.classList.add('error_pass');
        document.getElementById('error_message').style.color = 'Red';
        document.getElementById('error_message').innerHTML = 'Passwords don\'t match';
    }
})