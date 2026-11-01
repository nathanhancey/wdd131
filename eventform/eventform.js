
// Dom elements
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notesLabel = document.querySelector('label[for="notes"]');
const notesInput = document.querySelector("#notes");
const output = document.querySelector("#output");

travelRange.addEventListener("change", function () {

    // Add field
    notesContainer.hidden = false;

    //change field
    if (travelRange.value === "one") {

        notesLabel.textContent = "Student ID (9 digits)";
        notesInput.placeholder = "Enter your 9-digit student ID";
        notesInput.required = true;

        // Pattern
        notesInput.pattern = "[0-9]{9}";
        notesInput.title = "Student ID must contain exactly 9 digits";

    } else if (travelRange.value === "many") {

        notesLabel.textContent = "Guest Passcode";
        notesInput.placeholder = "Enter guest passcode";
        notesInput.required = true;

        // Make sure there is no pattern for the quests
        notesInput.removeAttribute("pattern");
        notesInput.title = "";
    }

    notesInput.value = "";
});

form.addEventListener("submit", function (event) {

    // Output the error into notes
    if (travelRange.value === "many" && notesInput.value !== "EVENT131") {
        output.textContent = "Invalid guest passcode. Please enter the correct passcode.";
        return;
    }

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const date = document.querySelector("#availableDate").value;
    const type = travelRange.options[travelRange.selectedIndex].text;

    
    output.innerHTML = `
        <h2>Event Ticket</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Event Date:</strong> ${date}</p>
        <p><strong>${notesLabel.textContent}:</strong> ${notesInput.value}</p>
    `;
});
