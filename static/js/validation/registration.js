
const errors = {
    "empty": " nesmí být prázdné.",
    "uniq": " již obsazeno, zkuste to znovu.",
    "short4": " musí být delší než 4 znaky.",
    "short8": " musí být delší než 8 znaky.",
    "long": " je příliš dlouhý.",
    "same": " musí být stejné.",
}


const lowerCase = /^[a-z]/;
const uperCase = /^[A-Z]/;
const numbers = /0-9/;

const validationError = (element, error) => {
    alert(error);

}


const usernameValidation = (element) => {
    const value = element.value;
    const item = "Jméno uživatele";

    switch (false) {
        case value:
            validationError(element, item + errors.empty);
            return false;

        case (value.length >= 4):
            validationError(element, item + errors.short4);
            return false;

        case (value.length <= 20):
            validationError(element, item + errors.long);
            return false;

        default:
            return true;
    }
}


const fnameValidation = (element) => {
    const value = element.value;
    const item = "Jméno";


    switch (false) {
        case value:
            validationError(element, item + errors.empty);
            return false;

        case (value.length >= 4):
            validationError(element, item + errors.short4);
            return false;

        case (value.length <= 20):
            validationError(element, item + errors.long);
            return false;


        default:
            return true;
    }
}
const lnameValidation = (element) => {
    const value = element.value;
    const item = "Příjmení";


    switch (false) {
        case value:
            validationError(element, item + errors.empty);
            return false;

        case (value.length >= 4):
            validationError(element, item + errors.short4);
            return false;

        case (value.length <= 20):
            validationError(element, item + errors.long);
            return false;

        default:
            return true;
    }
}
const birthdayValidation = (element) => {

    switch (false) {
        case value:
            validationError(item, errors.empty);
            return false;

        default:
            return true;
    }
}
const emailValidation = (element) => {
    switch (false) {
        case value:
            validationError(item, errors.empty);
            return false;

        default:
            return true;
    }
}

const passwordValidation = (element, password2) => {
    const value = element.value;
    const item = "Heslo";

    switch (false) {
        case value:
            validationError(element, item + errors.empty);
            return false;

        case (value.length >= 8):
            validationError(element, item + errors.short8);
            return false;

        case lowerCase.test(value) || uperCase.test(value) || numbers.test(value):
            validationError(element, item + " musí obsahovat velká písmena, písmena a čísla.");
            return false;

        case (value === password2.value):
            validationError(password2, item + errors.same);
            return false;

        default:
            return true;
    }
}


const registrationValidation = () => {
    const username = document.forms.registration.username;
    const fname = document.forms.registration.fname;
    const lname = document.forms.registration.lname;
    const birthday = document.forms.registration.birthday;
    const email = document.forms.registration.email;
    const password1 = document.forms.registration.password1;
    const password2 = document.forms.registration.password2;

    switch (false) {
        case usernameValidation(username):
            return false;
        case fnameValidation(fname):
            return false;
        case lnameValidation(lname):
            return false;
        // case birthdayValidation(birthday):
        //     return false;
        // case emailValidation(email):
        //     return false;
        case passwordValidation(password1, password2):
            return false;
        default:
            return true;
    }
}