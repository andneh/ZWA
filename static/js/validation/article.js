const titleValidation = (element) => {
    const value = element.value;
    const item = "Název";


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

const textValidation = (element) => {
    const value = element.value;
    const item = "Text";

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

const articleValidation = (form) => {
    const title = form.title;
    const text = form.text;

    switch (false) {

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

const login = document.forms.article;
article.addEventListener("submit", () => { articleValidation(article); });