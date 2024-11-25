document.addEventListener('DOMContentLoaded', function () {
    const mobileNavbarHeight = document.querySelector('.mobile').offsetHeight;
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarNav');
    var navbar = document.querySelectorAll('.navbar')[1];

    navbarCollapse.style.minHeight = `calc(100vh - ${mobileNavbarHeight}px)`;


    navbarToggler.addEventListener('click', function () {

        if (navbarCollapse.classList.contains('show')) {
            navbar.classList.remove('navbar-expanded');
        } else {
            navbar.classList.add('navbar-expanded');
        }
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', function () {

    });
});