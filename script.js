// DOM Element

const loginBtn = document.querySelector('.log-in')
const topLoginBtn = document.querySelector('.btn-top');
const idInput = document.querySelector('.user-info');
const pwdInput = document.querySelector('.password');

/* ************************************************************* */

loginBtn.addEventListener('click', () => {
    location.href = './Login%20Page/index.html';
});

topLoginBtn.addEventListener('click', ()=>{
    if(idInput.value !== '' && pwdInput.value !== ''){
        location.href = './News%20Feed%20Page/index.html';
    }
    else{
        alert('Wrong Password or User Info.')
        location.href = './Login%20Page/index.html';
    }
});