const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalInput = document.querySelector('.modal-input');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');


const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
const xBtn = document.querySelector('.sidebar-header i');

const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

// Post modal
postBtn.addEventListener('click', () => {
    modal.style.display  = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
})

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

postModalX.addEventListener('click', () => {
    modal.style.display  = 'none';
    modalWrapper.classList.remove('modal-wrapper-display')

    if(modalInput.value !==""){
        modalInput.value = "";
        changeOpacity(0.5);
    }
})

modalInput.addEventListener('keypress', (e) => {
    if(e.target.value !== ''){
        changeOpacity(1);
    }
})

modalInput.addEventListener('blur', (e) => {
    if(e.target.value === ''){
        changeOpacity(0.5);
    }
})



//Sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display')
    sidebarWrapper.classList.add('sidebar-wrapper-display')
})

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display')
    sidebarWrapper.classList.remove('sidebar-wrapper-display')
})

// dark mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    darkElements1.forEach((el) => {
        el.classList.toggle('dark-1');
    });
    darkElements2.forEach((el) => {
        el.classList.toggle('dark-2');
    })
    lightTexts.forEach((el) => {
        el.classList.toggle('light');
    })
    borders.forEach((el) => {
        el.classList.toggle('border-color')
    })
})