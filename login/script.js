// DOM Element

const loginBtn = document.querySelector('.login-form button');
const idInput = document.querySelector('.user-info');
const pwdInput = document.querySelector('.password');


/* ************************************************************* */

loginBtn.addEventListener('click', () => {
    if(idInput.value !== '' && pwdInput.value !== ''){
        location.href = "/Home/home.html";
    }
    else{
        alert('Wrong Password or User Info.')
    }

})
