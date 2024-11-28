const searchIcon = document.getElementById('search-icon');

if (searchIcon) {
    searchIcon.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });

        if (navbarCollapse.classList.contains('show')) {
            navbar.classList.remove('navbar-expanded');
            navbarCollapse.classList.remove('show');
        }
    });
}