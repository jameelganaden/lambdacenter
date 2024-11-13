function openProfilePopup(photoUrl, blurbText) {
    // Set the profile photo and text
    document.getElementById("profilePhoto").src = photoUrl;
    document.getElementById("profileBlurb").textContent = blurbText;
    
    // Display the modal
    const modal = document.getElementById("profileModal");
    modal.classList.add("active");
}

function closeProfilePopup() {
    // Hide the modal
    const modal = document.getElementById("profileModal");
    modal.classList.remove("active");
}

function closeProfilePopup() {
    document.getElementById("profileModal").classList.remove("active");
}

// Close modal when clicking outside the content area
window.onclick = function(event) {
    const modal = document.getElementById("profileModal");
    if (event.target === modal) {
        closeProfilePopup();
    }
};
