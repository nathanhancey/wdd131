// Get references to the HTML elements 

const card = document.getElementById("character-card");

// Make character with properties and methods

const characters = {
    Wames: {
        name: "Wames Jarner",
        class: "Camera Wizard",
        level: 1,
        health: 100,
        photopath: "images/Camera Wizard.png",
        photoalt: "Old wise wizard holding a camera",
        attack: function() {
            if (this.health > 0) {
                this.health -= 20;
            } else {
                this.health = 0;
            }
        },
        levelUp: function() {
            this.level += 1;
        }
    },
};

// update the character card with the character's information

function updateCharacterCard(character) {
    card.querySelector("#character-name").textContent = character.name;
    card.querySelector("#character-class").textContent = character.class;
    card.querySelector("#character-level").textContent = character.level;
    card.querySelector("#character-health").textContent = character.health;
    card.querySelector("#character-photo").src = character.photopath;
    card.querySelector("#character-photo").alt = character.photoalt;
}

// setup the initial character card 

// add event listener to the attack button
document.getElementById("attack-button").addEventListener("click", function() {
    characters.Wames.attack();
    updateCharacterCard(characters.Wames);
});

// add event listener for level up button
document.getElementById("level-up-button").addEventListener("click", function() {
    characters.Wames.levelUp();
    updateCharacterCard(characters.Wames);
}); 

updateCharacterCard(characters.Wames);