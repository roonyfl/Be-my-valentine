// Access the buttons
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Function for handling "Yes" button click
yesButton.addEventListener('click', () => {
    alert("Yay! 💖 You said yes!");
    document.body.style.backgroundColor = "#ffccff"; // Changes background color when yes is clicked
    yesButton.style.backgroundColor = "#ff3385"; // Changes the color of the Yes button
    noButton.style.display = "none"; // Hides the "No" button
});

// Function for handling "No" button click
noButton.addEventListener('click', () => {
    alert("Oh no! 💔 Maybe next time...");
    document.body.style.backgroundColor = "#ffcccc"; // Changes background color when no is clicked
    noButton.style.backgroundColor = "#ff99cc"; // Changes the color of the No button
    yesButton.style.display = "none"; // Hides the "Yes" button
});
