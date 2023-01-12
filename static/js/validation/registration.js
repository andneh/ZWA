
const errors = {
    "empty": " nesmí být prázdné.",
    "uniq": " již obsazeno, zkuste to znovu.",
    "short4": " musí být delší než 4 znaky.",
    "short8": " musí být delší než 8 znaky.",
    "long": " je příliš dlouhý.",
    "same": " musí být stejné.",
}

const validationError = (element, error) => {
    alert(error);
    element.style.borderColor = "red";
}
const validationOk = (element, error) => {
    element.style.borderColor = "var(--line)";
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
            validationOk(element);
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
            validationOk(element);
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
            validationOk(element);
            return true;
    }
}

const birthdayValidation = (element) => {
    const item = "Datum";
    const value = element.value ? new Date(element.value) : false;
    let age = 0;
    if (value) {
        const ageDate = new Date(Date.now() - value.getTime());
        age = (Math.abs(ageDate.getUTCFullYear() - 1970));
    }

    switch (false) {
        case value:
            validationError(element, errors.empty);
            return false;

        case (age >= 18):
            validationError(element, "18+");
            return false;

        default:
            return true;
    }
}

const emailValidation = (element) => {
    const value = element.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch (false) {
        case value != "":
            return true;

        case re.test(String(value).toLowerCase()):
            validationError(element, "Zadali jste špatný e-mail.");
            return false;

        default:
            return true;
    }
}

const passwordValidation = (element, password2) => {
    const value = element.value;
    const item = "Heslo";
    const upper = /[A-Z]+/i;
    const lower = /[a-z]+/i;
    const numbers = /[0-9]+/i;

    switch (false) {
        case value:
            validationError(element, item + errors.empty);
            return false;

        case (value.length >= 8):
            validationError(element, item + errors.short8);
            return false;

        case upper.test(value) && lower.test(value) && numbers.test(value):
            validationError(element, item + " musí obsahovat velká písmena, písmena a čísla.");
            return false;

        case (value === password2.value):
            validationError(password2, item + errors.same);
            return false;

        default:
            validationOk(element);
            return true;
    }
}

const registrationValidation = (form) => {
    switch (false) {
        case usernameValidation(form.username):
            return false;
        case fnameValidation(form.fname):
            return false;
        case lnameValidation(form.lname):
            return false;
        case birthdayValidation(form.birthday):
            return false;
        case emailValidation(form.email):
            return false;
        case passwordValidation(form.password1, form.password2):
            return false;
        default:
            return true;
    }
}

const registration = document.forms.registration;
registration.addEventListener("submit", () => { registrationValidation(registration); });