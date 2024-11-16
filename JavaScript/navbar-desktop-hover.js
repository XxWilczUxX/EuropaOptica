const navbar = document.getElementById('navbar');
const navItems = navbar.querySelectorAll('.nav-item');

const dropdownContent = document.getElementById('dropdown-content');
dropdownContent.style.top = `${navbar.offsetHeight}px`;

navItems.forEach(item => {
    item.firstChild.style.color = 'lightgray';

    item.addEventListener('mouseover', () => { // Hovering
        navbar.style.background = 'none';
        navbar.style.backgroundColor = 'white';
        navItems.forEach(element => {
            element.firstChild.style.color = 'darkslategray';
        });
        item.firstChild.style.color = 'black';

        dropdownContent.classList.add('show');
    });
    item.addEventListener('mouseout', () => { // Not hovering
        navbar.style.backgroundColor = 'none';
        navbar.style.background = 'linear-gradient(to bottom, black, transparent)';
        navItems.forEach(element => {
            element.firstChild.style.color = 'lightgray';
        });

        dropdownContent.classList.remove('show');
    });
});