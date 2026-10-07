// This runs when the page loads
console.log("UCC Student Market loaded successfully");

// Example: a simple alert when someone clicks an item
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("item")) {
        alert("You tapped: " + e.target.querySelector("h2").innerText);
    }
});
