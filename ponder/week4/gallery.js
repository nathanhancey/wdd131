// 1. Refreive elements from the DOM
let dialog = document.querySelector('dialog');
let gallery = document.querySelector('.gallery');
let dialogImage = dialog.querySelector('img');
let closeButton = dialog.querySelector('.close-viewer');

// 2. Add event listeners to show dialog
gallery.addEventListener("click", function(event) {
    console.log(event.target.src);

    // Swap out src of dialog image if clicked element is an image
    if (event.target.tagName !== undefined) {
        dialogImage.src = event.target.src.replace('-sm', '-full');

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