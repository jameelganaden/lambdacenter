// password-protect.js

function checkPassword() {
    const correctPassword = "yourPassword"; // Set your password here
    let userPassword = prompt("Please enter the password:");

    if (userPassword === correctPassword) {
        document.getElementById("protected-content").style.display = "block";
    } else {
        alert("Incorrect password. Access denied.");
        // Optionally, you can redirect the user or give them another chance:
        // window.location.href = "error.html"; 
        // Or, call checkPassword() again if you want to loop until correct.
    }
}

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
function openPdf(pdfUrl) {
    const modal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = pdfUrl;
    modal.classList.add("active");
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




