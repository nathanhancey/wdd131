let menuBtn = document.querySelector('.menu-btn');

// get multiple elements from the DOM
let nav = document.querySelectorAll('nav a');

// When menu button is clicked display the nav menu and change the button to an X
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('change');

    nav.forEach(function(link) {
        link.style.display = link.style.display === 'block' ? 'none' : 'block';
        link.style.borderBottom = link.style.borderBottom === '1px solid #000' ? 'none' : '1px solid #000';
    });
});
