const usernameValidation = (element) => {
    const value = element.value;
    const item = "Jméno uživatele";
    switch (false) {
        // cases of validation of one element
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
        // cases of validation of one element
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
        // cases of validation of one element
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
        // get age
        const ageDate = new Date(Date.now() - value.getTime());
        age = (Math.abs(ageDate.getUTCFullYear() - 1970));
    }
    // cases of validation of one element
    switch (false) {
        case value:
            validationError(element, item + errors.empty);
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
    // cases of validation of one element
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
    // cases of validation of one element
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
    // cases of validation of each input
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
            console.log("ok");
            return true;
    }
}