// const pass = document.getElementById('pass');
// const regex = /\d+/g;
// if (pass.length < 8) {
//     pass.setCustomValidity("password is too short");
// }

// if (pass !== regex) {
//     pass.setCustomValidity("a digit must be present in password");
// }
function validate(e) {
    e.preventDefault();
    const pass = document.getElementById('pass');
    const regex = /\d+/g;
    console.log(pass.value);
    if (pass.value.length < 8) {
        pass.setCustomValidity("password is too short");
    }

    if (pass.value !== regex) {
        pass.setCustomValidity("a digit must be present in password");
    }
}