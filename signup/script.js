// DOM Element

const loginBtn = document.querySelector('.log-in')
const topLoginBtn = document.querySelector('.btn-top');
const idInput = document.querySelector('.user-info');
const pwdInput = document.querySelector('.password');

/* ************************************************************* */

loginBtn.addEventListener('click', () => {
    location.href = '/Home/home.html';
});

topLoginBtn.addEventListener('click', ()=>{
    if(idInput.value !== '' && pwdInput.value !== ''){
        location.href = '/Home/home.html';
    }
    else{
        alert('Wrong Password or User Info.')
        location.href = '/Login/login.html';
    }
});