

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;



    if (email == "user@gmail.com" && password == "mypassword") {
        window.location.href = "home.html";

    }
    if (email == "") {
        alert("email cannot be empty");
        return;
    }

    


} 