// Retrieve elements from the DOM for the dialog box and main content
let dialog = document.querySelector('dialog');
let main = document.querySelector('main');
let dialogImage = dialog.querySelector('img');
let closeButton = dialog.querySelector('.close-viewer');

// Get menu elements from the DOM
let menuBtn = document.querySelector('.menu-btn');
let nav = document.querySelectorAll('nav a');

// Add event listener to main element to listen for clicks on images
main.addEventListener("click", function(event) {
    console.log(event.target.src);

    // Swap out src of dialog image if clicked element is an image
    if (event.target.tagName === "IMG") {
        dialogImage.src = event.target.src;

        // show dialog box
       dialog.showModal();
    }
});

// Add event listener to close the dialog box when X pressed
closeButton.addEventListener("click", function() {
    dialog.close();
});

// Close when clicking outside the dialog box
dialog.addEventListener("click", function(event) {
    if (event.target === dialog) {
        dialog.close();
    }
});

// When menu button is clicked display the nav menu and change the button to an X
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('change');

    /* display the menu and make sure the items apear in the middle */
    nav.forEach(function(link) {
        link.style.display = link.style.display === 'block' ? 'none' : 'block';
        link.style.textAlign = 'center';
    });
});