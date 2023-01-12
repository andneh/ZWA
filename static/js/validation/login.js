const loginValidation = (form) => {
    const username = form.username;
    const password = form.password;

    switch (false) {

        case usernameValidation(username):
            return false;

        case password:
            validationError(password, "Heslo" + errors.empty);
            return false;

        case password.length >= 8:
            validationError(password, "Heslo" + errors.short8);
            return false;

        default:
            validationOk(password);
            return true;
    }
}

const login = document.forms.login;
login.addEventListener("submit", () => { loginValidation(login); });