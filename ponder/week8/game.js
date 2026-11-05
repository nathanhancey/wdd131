// 1. Add event listener to the button
document.querySelector('#rollButton').addEventListener("click", event => {
    // animate the dice
        
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        // swith source to die rolling animation
        if (isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    // change the value each die lands on randomly
    images.forEach(image => {
        if (isDieUnlocked(image)) {
            setTimeout(() => {
            image.src = `assets/white_dice_${Math.floor(Math.random() * 6) + 1}.gif`;
        }, 1000);
        }   
    });
});

function isDieUnlocked(dieImage) {
    // Is the corresponding checkbox checked?
    const checkbox = document.querySelectorAll('#gameboard input');
    // return a new array of just the checked ones.
    const unchecked = Array.from(checkbox).filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImage.className);
}