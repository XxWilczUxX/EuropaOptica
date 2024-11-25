const desktopNavbarInit = () => {
    var navbar = document.querySelectorAll('.navbar')[0];
    const navbarHeight = navbar.offsetHeight;
    const desktopNavItems = navbar.querySelectorAll('.nav-item');
    const desktopPrimaryLinks = navbar.querySelector('.primary-links').querySelectorAll('.navbar-nav .nav-item');

    var dropdownContent = document.querySelector('#dropdown-content');

    dropdownContent.style.top = `${navbarHeight - 1}px`;

    desktopPrimaryLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            navbar.classList.add('navbar-expanded');
            dropdownContent.classList.add('show');

            dropdownContent.innerHTML = '';

            var additionalLinks = link.querySelector('.additional-links').innerHTML;
            dropdownContent.innerHTML = additionalLinks;


        });

        link.addEventListener('mouseleave', () => {
            setTimeout(() => {
                let match = false;
                desktopPrimaryLinks.forEach(link => {
                    if (link.matches(':hover')) {
                        match = true;
                    }
                });
                if (!match && !dropdownContent.matches(':hover')) {
                    navbar.classList.remove('navbar-expanded');
                    dropdownContent.classList.remove('show');
                }
            }, 150);
        });

        dropdownContent.addEventListener('mouseleave', () => {
            let match = false;
            desktopPrimaryLinks.forEach(link => {
                if (link.matches(':hover')) {
                    match = true;
                }
            });
            if (!match) {
                navbar.classList.remove('navbar-expanded');
                dropdownContent.classList.remove('show');
            }
        });
    });
}