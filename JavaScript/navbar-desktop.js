const navbarDesktop = document.getElementById('navbar-desktop');
const navDesktopItems = navbarDesktop.querySelectorAll('.nav-item');

const dropdownContent = document.getElementById('dropdown-content');
dropdownContent.style.top = `${navbarDesktop.offsetHeight}px`;

const attachSearchListeners = (element) => {
    if (element.id === 'search-form') {
        element.addEventListener('submit', submit => {
            submit.preventDefault();
            const searchInput = element.querySelector('#search-input');
            console.log('Search submitted:', searchInput.value);
        });

        const searchInput = element.querySelector('#search-input');
        if (searchInput.id === 'search-input') {
            element.addEventListener('input', input => {
                const query = input.target.value.toLowerCase();
                const searchResults = document.getElementById('search-results');
                console.log('Search input:', query);
            });
        }
    }


};

navDesktopItems.forEach(item => {
    item.children[0].style.color = 'lightgray';

    item.addEventListener('mouseover', () => { // Hovering
        navbarDesktop.style.background = 'none';
        navbarDesktop.style.backgroundColor = 'white';
        navDesktopItems.forEach(element => {
            element.children[0].style.color = 'darkslategray';
        });
        item.children[0].style.color = 'black';

        let contents = item.children[1].children;
        dropdownContent.innerHTML = '';
        dropdownContent.style.top = `${navbarDesktop.offsetHeight}px`;
        dropdownContent.style.height = `auto`;
        Array.from(contents).forEach(element => {
            const clonedElement = element.cloneNode(true);
            dropdownContent.appendChild(clonedElement);
            attachSearchListeners(clonedElement);
        });

        dropdownContent.classList.add('show');
    });
});

dropdownContent.addEventListener('mouseout', () => { // Not hovering
    if (!dropdownContent.matches(':hover') && !navbarDesktop.matches(':hover')) {
        navbarDesktop.style.backgroundColor = 'none';
        navbarDesktop.style.background = 'linear-gradient(to bottom, black, transparent)';
        navDesktopItems.forEach(element => {
            element.children[0].style.color = 'lightgray';
        });

        dropdownContent.classList.remove('show');
    }
});