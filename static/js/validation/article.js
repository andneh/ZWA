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

        case (value.length <= 1000):
            validationError(element, item + " velmi dlouhý.");
            return false;

        default:
            validationOk(element);
            return true;
    }
}

const articleValidation = (form) => {
    switch (false) {
        case titleValidation(form.title):
            return false;
        case textValidation(form.text):
            return false;
        default:
            return true;
    }
}

const login = document.forms.article;
article.addEventListener("submit", () => { articleValidation(article); });