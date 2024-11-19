const navbar = document.getElementById('navbar');
const navItems = navbar.querySelectorAll('.nav-item');

const dropdownContent = document.getElementById('dropdown-content');
dropdownContent.style.top = `${navbar.offsetHeight}px`;

navItems.forEach(item => {
    item.children[0].style.color = 'lightgray';

    item.addEventListener('mouseover', () => { // Hovering
        navbar.style.background = 'none';
        navbar.style.backgroundColor = 'white';
        navItems.forEach(element => {
            element.children[0].style.color = 'darkslategray';
        });
        item.children[0].style.color = 'black';

        let contents = item.children[1].children;
        dropdownContent.innerHTML = '';
        Array.from(contents).forEach(element => {
            dropdownContent.appendChild(element.cloneNode(true));
        });

        dropdownContent.classList.add('show');
    });

});

dropdownContent.addEventListener('mouseout', () => { // Not hovering
    if (!dropdownContent.matches(':hover') && !navbar.matches(':hover')) {
        navbar.style.backgroundColor = 'none';
        navbar.style.background = 'linear-gradient(to bottom, black, transparent)';
        navItems.forEach(element => {
            element.children[0].style.color = 'lightgray';
        });

        dropdownContent.classList.remove('show');
    }
});