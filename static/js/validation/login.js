const loginValidation = (form) => {
    switch (false) {
        case usernameValidation(form.username):
            return false;

        case form.password:
            validationError(password, "Heslo" + errors.empty);
            return false;

        case form.password.length >= 8:
            validationError(password, "Heslo" + errors.short8);
            return false;

        default:
            validationOk(password);
            return true;
    }
}

const login = document.forms.login;
login.addEventListener("submit", () => { loginValidation(login); });