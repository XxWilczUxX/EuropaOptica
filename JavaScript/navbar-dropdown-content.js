function createContentImg() {
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'dropdown-image';

    const div = document.createElement('div');
    div.className = 'image-label-container';

    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/360x200';
    img.alt = 'placeholder';

    const p = document.createElement('p');
    p.textContent = 'Category';

    div.appendChild(img);
    div.appendChild(p);

    anchor.appendChild(div);

    dropdownContent.appendChild(anchor);
}

function createContentText() {
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'dropdown-text';

    const h3 = document.createElement('h3');
    h3.textContent = 'Title';

    const p = document.createElement('p');
    p.textContent = 'Description';

    anchor.appendChild(h3);
    anchor.appendChild(p);

    dropdownContent.appendChild(anchor);
}

// TODO: implement it with backend data

for (let i = 0; i < 5; i++) {
    createContentImg();
    createContentText();
}