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
const profilePhoto = document.getElementById("profile-photo");
const photoBtn = document.getElementById("photo-btn");

let isFirstPhoto = true;

function switchPhoto() {
    profilePhoto.classList.add("fade-out");

    setTimeout(function () {
        if (isFirstPhoto === true) {
            profilePhoto.src = "assets/profile2.jpg";
            profilePhoto.alt = "Professional photo of Shahd Jum'ah";
            isFirstPhoto = false;
        } else {
            profilePhoto.src = "assets/profile.jpeg";
            profilePhoto.alt = "Photo of Shahd Jum'ah";
            isFirstPhoto = true;
        }

        profilePhoto.classList.remove("fade-out");
    }, 300);
}

photoBtn.addEventListener("click", switchPhoto);
