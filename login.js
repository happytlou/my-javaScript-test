

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(password)


    if (email == "user@gmail.com" && password == "mypassword") {
        window.location.href = "home.html";
        console.log('login')
    }
    else {
        alert("Invalid Email and Password");
    }


}