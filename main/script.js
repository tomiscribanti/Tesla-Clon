const menuBtn = document.getElementById('menuBtn');
const navBar = document.getElementById('navbar');
const closeBtn = document.getElementById('close');
const blurNav = document.querySelector('.blur');
const btnModel = document.querySelectorAll('#btnModelBuy');


menuBtn.addEventListener('click', function() {
    navBar.classList.add('show');
    blurNav.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    navBar.classList.remove('show');
    blurNav.classList.remove('active');
})
