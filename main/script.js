const menuBtn = document.getElementById('menuBtn');
const navBar = document.getElementById('navbar');
const closeBtn = document.getElementById('close');
const blurNav = document.querySelector('.blur');

menuBtn.addEventListener('click', function() {
    navBar.classList.add('show');
    blurNav.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    navBar.classList.remove('show');
    blurNav.classList.remove('active');
})

window.sr = ScrollReveal();

sr.reveal('.scTittle', {
    duration: 1000,
    origin: 'bottom',
    distance: '40px',
    mobile: true,
    reset: true
});
sr.reveal('.scDesc', {
    duration: 3000,
    origin: 'bottom',
    distance: '60px',
    mobile: true,
    reset: true
});

sr.reveal('.btnSct', {
    duration: 3000,
    origin: 'right',
    distance: '60px',
    mobile: true,
    reset: true
});

sr.reveal('.btnSction', {
    duration: 3000,
    origin: 'left',
    distance: '60px',
    mobile: true,
    reset: true
});

sr.reveal('.bounce-arrow', {
    duration: 4000,
    origin: 'top',
    distance: '-200px',
    mobile: true,
    reset: true
});

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
})