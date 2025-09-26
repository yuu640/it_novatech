document.addEventListener('DOMContentLoaded', function () {
    let nav = document.querySelector('header')
    let btn = document.querySelector('.header__togglebtn')
    let mask = document.querySelector('.header__mask')

    btn.addEventListener('click', function () {
        nav.classList.toggle('open')
    });

    if (!mask) {
        return false;
    }

    mask.addEventListener('click', function () {
        nav.classList.remove('open')
    })
})

