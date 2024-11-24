const navbarMobile = document.getElementById('navbar-mobile');
const navMobileItems = navbarMobile.querySelectorAll('.nav-item');

let isDown = false;

const recalculateDropdown = () => {

};

const handleInsideClick = (item) => {
    if (item.classList.contains('open')) {
        item.children[1].style.display = 'none';
        item.children[0].style.backgroundColor = 'white';
        item.classList.remove('open');
    }
    else {
        item.children[1].style.display = 'block';
        item.children[0].style.backgroundColor = 'lightgray';
        item.classList.add('open');
    }

    recalculateDropdown();
}

const handleMobileClick = (item) => {
    if (isDown) {
        navbarMobile.style.backgroundColor = 'none';
        navbarMobile.style.background = 'linear-gradient(to bottom, black, transparent)';
        navMobileItems.forEach(element => {
            element.children[0].style.color = 'lightgray';
        });

        dropdownContent.classList.remove('show');
        isDown = false;
        return;
    }
    navbarMobile.style.background = 'none';
    navbarMobile.style.backgroundColor = 'white';
    navMobileItems.forEach(element => {
        element.children[0].style.color = 'darkslategray';
    });
    item.children[0].style.color = 'black';

    let contents = item.children[1].children;
    dropdownContent.innerHTML = '';
    dropdownContent.style.top = `${navbarMobile.offsetHeight}px`;
    dropdownContent.style.minHeight = `calc(100vh - ${navbarMobile.offsetHeight}px)`;


    Array.from(contents).forEach(element => {
        const clonedElement = element.cloneNode(true);
        dropdownContent.appendChild(clonedElement);
        attachSearchListeners(clonedElement);
    });

    contents = dropdownContent.querySelectorAll('.nav-item');
    contents.forEach(element => {
        element.addEventListener('click', () => {
            handleInsideClick(element);
        });
    });

    recalculateDropdown();

    dropdownContent.classList.add('show')
    isDown = true;
};

navMobileItems.forEach(item => {
    item.children[0].style.color = 'lightgray';

    item.addEventListener('click', () => { // Clicked
        handleMobileClick(item);
    });
});