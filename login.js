

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;



    if (email == "user@gmail.com" && password == "mypassword") {
        window.location.href = "home.html";

    }
    else {
        alert("Invalid Email and Password");
    }


}  