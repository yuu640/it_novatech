document.addEventListener('DOMContentLoaded', function () {

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === "#") return;

            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('toTopBtn').addEventListener('click', function (e) {
        e.preventDefault(); // #へのジャンプを防ぐ
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーススクロール
        });
    });



    window.addEventListener('scroll', function () {

        const contents = document.querySelectorAll('.fadeIn');

        function checkScroll() {
            const windowHeight = window.innerHeight;
            contents.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const elementBottom = el.getBoundingClientRect().bottom;

                if (elementTop < windowHeight && elementBottom >= 0) {
                    el.classList.add('is-scrollIn');
                }
            });
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

    })


    const pageTopBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;

        if (scrollPosition > 500) {
            pageTopBtn.style.opacity = "1";
        } else {
            pageTopBtn.style.opacity = "0";
        }

        pageTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    })
})