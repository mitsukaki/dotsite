function signin() {
    rest('post', '/api/auth', {
        email: document.getElementById('semail').value,
        pass: document.getElementById('spassword').value
    }, function (res) {
        if (res.s == 'ok') {
            Cookies.set('nick', res.nick);
            Cookies.set('atoken', res.access_token);
            window.location = "./index.html";
        } else {
            alert("failed! Err: " + res.c);
        }
    });
}

function register() {
    rest('post', '/api/user', {
        email: document.getElementById('remail').value,
        nick: document.getElementById('rnick').value,
        pass: document.getElementById('rpassword').value
    }, function () {
        if (res.s == 'ok')
            alert("Success! Please check your email and confirm!");
        else
            alert("failed! Err: " + res.c);
    });
}

function rest(type, endpoint, obj, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, location.origin + endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(obj));
    xhr.onloadend = function () {
        cb(JSON.parse(xhr.responseText));
    };
}

window.onload = function () {
    if (window.location.pathname !== '/auth.html')
        if (Cookies.get('atoken') == undefined)
            window.location = "./auth.html";
};
