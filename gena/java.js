document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-btn');
    const form = document.getElementById('registration-form');

    // Show popup after registration
    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // You would normally handle registration logic here (e.g., AJAX call)
        
        // If registration is successful, show the popup
        popup.style.display = 'block';
    };

    // Close popup when clicking the close button
    closeButton.onclick = function() {
        popup.style.display = 'none';
    };

    // Close popup when clicking outside of it
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };
});
