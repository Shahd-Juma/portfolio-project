const themeBtn = document.getElementById("theme-btn");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light mode";
    } else {
        themeBtn.textContent = "🌙 Dark mode";
    }
}

themeBtn.addEventListener("click", toggleTheme);
