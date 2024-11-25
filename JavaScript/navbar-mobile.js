const mobileNavbarInit = () => {
    const mobileNavbarHeight = document.querySelector('.mobile').offsetHeight;
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarNav');
    var navbar = document.querySelectorAll('.navbar')[1];

    console.log(mobileNavbarHeight);
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


    const mobileNavItems = navbar.querySelectorAll('.navbar-nav .nav-item');
    const mobilePrimaryLinks = navbar.querySelector('.primary-links').querySelectorAll('.navbar-nav .nav-item');

    mobilePrimaryLinks.forEach(item => {
        item.addEventListener('click', function () {
            // Hide all other additional links
            mobilePrimaryLinks.forEach(i => {
                if (i !== item) {
                    i.classList.toggle('hide');
                }
            });

            // Toggle the clicked item
            item.classList.toggle('active');
        });
    });
}