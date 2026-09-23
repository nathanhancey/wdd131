// How to manipulate the DOM using JavaScript

//Grab our h1 from the page
let heading = document.querySelector('h1');

console.log(heading);

// Change the text of the element
heading.textContent = 'Changed the heading to something else!';

// Change the text color
heading.style.color = 'pink';

// Pick your own style and change it
heading.style.fontSize = '50px';
heading.style.fontFamily = 'comic sans ms';

// Retrive an ID element from the page
document.getElementById('topics').style.color = 'brown';

let image = document.querySelector('img');

console.log(image.getAttribute('src'));

image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Leopardus_tilcayo_%285x3_cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled');

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                