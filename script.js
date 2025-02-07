// Access the buttons
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Function for handling "Yes" button click
yesButton.addEventListener('click', () => {
    alert("Yay! 💖 You said yes!");
    document.body.style.backgroundColor = "#ffccff"; // Changes background color when yes is // Background Slideshow
const images = [
    "image1.jpg", // Replace with actual image paths
    "image2.jpg",
    "image3.jpg"
];

const slideshowContainer = document.createElement("div");
slideshowContainer.classList.add("slideshow");

images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    if (index === 0) img.classList.add("active");
    slideshowContainer.appendChild(img);
});

document.body.prepend(slideshowContainer);

let currentIndex = 0;
setInterval(() => {
    const slides = document.querySelectorAll(".slideshow img");
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
}, 5000); // Change image every 5 seconds

// Play Background Music on Click
document.body.addEventListener("click", () => {
    const audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    }
});

// Access the buttons
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');
const body = document.body;

// Function for handling "Yes" button click
yesButton.addEventListener('click', () => {
    alert("Yay! 💖 You said yes!");

    // Change background color
    body.style.backgroundColor = "#ffccff";

    // Change Yes button style
    yesButton.style.backgroundColor = "#ff3385";
    yesButton.innerText = "💖 Yay! 💖";

    // Hide No button
    noButton.style.display = "none";

    // Play happy sound
    let happySound = new Audio("happy.mp3"); // Replace with actual audio file
    happySound.play();

    // Create floating hearts effect
    createHearts();
});

// Function for handling "No" button click
noButton.addEventListener('click', () => {
    alert("Oh no! 💔 Maybe next time...");

    // Change background color
    body.style.backgroundColor = "#ffcccc";

    // Change No button style
    noButton.style.backgroundColor = "#ff99cc";
    noButton.innerText = "💔 Are you sure? 💔";

    // Hide Yes button
    yesButton.style.display = "none";

    // Play sad sound
    let sadSound = new Audio("sad.mp3"); // Replace with actual audio file
    sadSound.play();
});

// Function to create floating hearts when "Yes" is clicked
function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.fontSize = Math.random() * 30 + 20 + "px";
        heart.style.opacity = Math.random();
        heart.style.animation = "float 3s linear infinite";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Make "No" button move away when hovered
noButton.addEventListener("mouseover", () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}); = "none"; // Hides the "Yes" button
});
