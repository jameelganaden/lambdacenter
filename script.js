// Run the password check on page load
window.onload = checkPassword;


function openPdf(pdfUrl) {
    const modal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = pdfUrl;
    modal.classList.add("active");
}

function closePdf() {
    const modal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = "";
    modal.classList.remove("active");
}

window.onclick = function(event) {
    const modal = document.getElementById("pdfModal");
    if (event.target == modal) {
        closePdf();
    }
}

// JavaScript to open and close the modal with the PDF
function openPdf(pdfUrl, mobileLink) {
    // Check if the user is on a mobile device
    if (isMobileDevice()) {
        // Redirect to the mobile link
        window.location.href = mobileLink;
    } else {
        // Open the PDF in the viewer
        const modal = document.getElementById("pdfModal");
        const pdfViewer = document.getElementById("pdfViewer");
        pdfViewer.src = pdfUrl;
        modal.classList.add("active");
    }
}

// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}


function closePdf() {
    const modal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = ""; // Clear the src to stop loading the PDF
    modal.classList.remove("active"); // Hide the modal
}

// Close modal when clicking outside the PDF area
window.onclick = function(event) {
    const modal = document.getElementById("pdfModal");
    if (event.target === modal) {
        closePdf();
    }
};




