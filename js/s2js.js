function register() {
    if (document.getElementById("name").value)
        if (document.getElementById("cname").value)
                if (document.getElementById("phone").value) {
                    document.getElementById("startbutton").innerHTML = "Loading";
                    var e = database.ref("users/").push();
                    e.set({
                        name: document.getElementById("name").value,
                        email: email,
                        phone: document.getElementById("phone").value,
                        college: document.getElementById("cname").value
                    }).then(function (e) {
                        window.location.reload(!1)
                    }, function (e) {
                        document.getElementById("startbutton").innerHTML = "Start", console.error(e), Materialize.toast("" + e, 1e3)
                    })
                } else Materialize.toast("Please enter Phone.", 1e3);
    else Materialize.toast("Please enter College Name.", 1e3);
    else Materialize.toast("Please enter name.", 1e3)
}



function signout() {
    firebase.auth().signOut().then(function () {
        window.location.href = "login.html"
    }, function (e) {
        Materialize.toast("" + e, 1e3)
    })
}
var name = document.getElementById("name").value,
    teamname;
