let pageContent = document.querySelector('body');
let logo = document.querySelector('#logo img');
let content = document.querySelector('#content');
let subheader = document.querySelector('#subheader');

function changeTheme() {
    let current = select.value;
    if (current === 'dark') {
        // Dark theme
        logo.src = 'byui-logo-white.png';
        pageContent.style.color = "white";
        pageContent.style.backgroundColor = "black";
        content.style.border = "1px solid white";
        subheader.style.borderBottom = "1px solid white";
    } else {
        // Light theme (default)
        logo.src = 'byui-logo-blue.webp';
        pageContent.style.color = "black";
        pageContent.style.backgroundColor = "white";
        content.style.border = "1px solid black";
        subheader.style.borderBottom = "1px solid black";
    }
}

let select = document.querySelector("#theme-select");

select.addEventListener('change', changeTheme);