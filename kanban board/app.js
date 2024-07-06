function getUser() {
    var users = localStorage.getItem("users");

    if (users) {
        users = JSON.parse(users);

    } else {
        users = [];
    }
    return users
}
function register() {
    var name = document.getElementById('r-name');
    var email = document.getElementById('r-email');
    var password = document.getElementById('r-password');
    var users = getUser()
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users))
    name.value = ""
    email.value = ""
    password.value = ""

}

register()

function login() {
    var email = document.getElementById('l-email');
    var password = document.getElementById('l-password');
    var users = getUser();
    var saveUser = {}
    for (var i = 0; users.length; i++) {
        if (email.value === users[i].email) {
            saveUser = users[i];
            break;
        }
    }
    if (saveUser.email) {
        if (saveUser.password === password.value) {

            Swal.fire({
                title: 'Success!',
                text: 'LOGIN SUCCESSFULLY',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'INVALID PASSWORD',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    } else {

        // event.preventDefault()
        Swal.fire({
            title: 'Error!',
            text: 'USER NOT FOUND',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });


    }
}

login()

function done (){
    Swal.fire({
        title: 'Success!',
        text: 'SIGNUP SUCCESSFULLY',
        icon: 'success',
        confirmButtonText: 'OK'
    });
   
}