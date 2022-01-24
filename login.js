

function login() {
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;

    if (email=="user@gmail.com" && password=="mypassword") {
        window.location.href="home.html";
    }
    else {
        alert("Invalid Email and Password");
    }
}