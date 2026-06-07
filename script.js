// Function to toggle between Dark and Light mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    const btn = document.getElementById("theme-toggle");
    
    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
        // Local storage-এ থিম সেভ করে রাখা (ঐচ্ছিক কিন্তু প্রফেশনাল)
        localStorage.setItem("theme", "dark");
    } else {
        btn.innerHTML = "🌙 Night Mode";
        localStorage.setItem("theme", "light");
    }
}

// পেজ লোড হওয়ার সময় ইউজারের আগের সিলেক্ট করা থিম চেক করা
window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-toggle").innerHTML = "☀️ Light Mode";
    }
};