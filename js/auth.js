function ping() {
    reqwest({
        url: '/api/ping',
        type: 'html',
        crossOrigin: true
    }).then(function (resp) {
        console.log(resp.content);
    }).fail(function (err, msg) {
        console.log(msg);
    });
}

function signin() {
    rest("post", "/api/auth", {
        email: document.getElementById("semail").value,
        pass: document.getElementById("spassword").value
    });
}

function register() {
    rest("post", "/api/user", {
        email: document.getElementById("remail").value,
        nick: document.getElementById("rnick").value,
        pass: document.getElementById("rpassword").value
    });
}

function rest(type, endpoint, obj) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, location.origin + endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(obj));
    xhr.onloadend = function () {
        console.log(xhr.responseText);
    };
}
