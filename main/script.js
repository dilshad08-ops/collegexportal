// Show logged user
window.onload = function () {
    let isLoggedIn = localStorage.getItem("login");
    let user = localStorage.getItem("user");

    if (isLoggedIn === "true") {
        document.getElementById("loginBtn").innerText = user;
    }
};

// Check login
function checkLogin(page) {
    let isLoggedIn = localStorage.getItem("login");

    if (isLoggedIn === "true") {
        window.location.href = page;
    } else {
        alert("First Login!");
        window.location.href = "../login/intex2.html";
    }
}

// Cards
document.getElementById("student").onclick = function () {
    checkLogin("student.html");
};

document.getElementById("professional").onclick = function () {
    checkLogin("professional.html");
};

document.getElementById("parents").onclick = function () {
    checkLogin("parents.html");
};