// JavaScript for dynamic features

// Display dynamic greeting based on the time of day
const dynamicGreeting = document.getElementById("dynamic-greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    dynamicGreeting.textContent = "Good Morning! Welcome to Copenet Technologies";
} else if (currentHour < 18) {
    dynamicGreeting.textContent = "Good Afternoon! Welcome to Copenet Technologies";
} else {
    dynamicGreeting.textContent = "Good Evening! Welcome to Copenet Technologies";
}

// Toggle visibility of the "About Me" section
const toggleButton = document.getElementById("toggle-button");
const aboutSection = document.getElementById("about-section");

toggleButton.addEventListener("click", () => {
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
        toggleButton.textContent = "Hide About Me";
    } else {
        aboutSection.style.display = "none";
        toggleButton.textContent = "Show About Me";
    }
});