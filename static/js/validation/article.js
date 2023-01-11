const articleValidation = () => {
    const username = document.forms.login.username;
    const password = document.forms.login.password;

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