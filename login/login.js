// Normal login
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("login", "true");
        localStorage.setItem("user", "Admin");

        window.location.href = "../main/intex.html";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

// Google login (REAL)
function handleCredentialResponse(response) {
    console.log("Google Response:", response);

    localStorage.setItem("login", "true");
    localStorage.setItem("user", "Google User");

    window.location.href = "../main/intex.html";
}