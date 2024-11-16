document.documentElement.style.scrollBehavior = 'smooth';

let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        const sections = document.querySelectorAll('.main-banner, .product-section, .footer');
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const scrollTarget = Math.round(scrollPosition / viewportHeight) * viewportHeight;

        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    }, 200);
});