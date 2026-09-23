// 1. Functions

// Python: def nameOfFunction():

function nameOfFunction(name) {
    // code go here

    console.log("We have run the function: " + name);
}


// Call or "Invoke" the function
nameOfFunction("nameOfFunction");

let pageContent = document.querySelector('body');

function changeTheme() {
    let current = select.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}

// 2. Event Listeners
    // Wait for user action to trigger a function

    // 1. Retrieve something from the DOM
    let select = document.querySelector("#theme-select");

    // 2. Register an event listenter.
    select.addEventListener('change', changeTheme);





// 3. If Statements