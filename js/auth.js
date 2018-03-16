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
    reqwest({
        url: '/api/auth',
        method: 'post',
        data: {
            email: document.getElementById("semail").value,
            pass: document.getElementById("spassword").value
        },
        success: function (resp) {
            console.log(resp);
        }
    });
}

function register() {
    reqwest({
        url: '/api/user',
        method: 'post',
        data: {
            email: document.getElementById("remail").value,
            nick: document.getElementById("rnick").value,
            pass: document.getElementById("rpassword").value
        },
        success: function (resp) {
            console.log(resp);
        }
    });
}
