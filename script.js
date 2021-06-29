const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close');
const sideNav = document.querySelector('.side-nav');



toggle.addEventListener('click', () => {
    sideNav.classList.add('active');
    sideNav.classList.remove('close');
});

close.addEventListener('click', () => {
    sideNav.classList.add('c;pse');
    sideNav.classList.remove('active');
})