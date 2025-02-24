document.addEventListener("DOMContentLoaded", function() {
    const updates = [
        "🎥 New Reels Effects: Try our latest AI-powered filters!",
        "📷 HD Photos: Upload and view high-resolution images.",
        "🔒 Enhanced Security: Extra layer of protection added.",
        "🛠 Performance Boost: Faster loading time & fewer bugs."
    ];

    const updatesContainer = document.getElementById("updates");
    
    updates.forEach(update => {
        let p = document.createElement("p");
        p.textContent = update;
        updatesContainer.appendChild(p);
    });

    // Login Popup Functionality
    const updateBtn = document.getElementById("updateBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeBtn = document.querySelector(".close");

    updateBtn.addEventListener("click", function() {
        loginPopup.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        loginPopup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });

    document.getElementById("loginBtn").addEventListener("click", function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username && password) {
            alert("Logging in...");
        } else {
            alert("Please enter your username and password!");
        }
    });
});