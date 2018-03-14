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
