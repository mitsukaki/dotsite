var signin_pane = document.getElementById("signin");
var register_pane = document.getElementById("register");

function show_signin() {
    signin_pane.style = "display: block";
    register_pane.style = "display: none";
}

function show_register() {
    register_pane.style = "display: block";
    signin_pane.style = "display: none";
}
