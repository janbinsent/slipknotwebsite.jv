// Select the accept and decline buttons
const acceptButton = document.querySelector('.acceptButton');
const declineButton = document.querySelector('.declineButton');

// Add event listeners to the buttons
acceptButton.addEventListener('click', redirectToMainPage);
declineButton.addEventListener('click', redirectToMainPage);

// Function to redirect to the main page
function redirectToMainPage() {
    // Redirect to the main page URL
    window.location.href = 'main2.html'; // Replace 'main.html' with your actual main page URL
}
