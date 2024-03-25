// Wait for the window to load
window.addEventListener('load', function() {
    // Select the loader element
    const loader = document.querySelector('.loader');
  
    // Function to redirect after animation completes
    function redirectAfterAnimation() {
      // Redirect to main page
      window.location.href = "main.html";
    }
  
    // Get the duration of the animation
    const animationDuration = 3500; // in milliseconds, same as your animation duration
  
    // Set timeout to redirect after animation completes
    setTimeout(redirectAfterAnimation, animationDuration);
  });
  