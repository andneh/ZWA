const errors = {
    "empty": " nesmí být prázdné.",
    "uniq": " již obsazeno, zkuste to znovu.",
    "short4": " musí být delší než 4 znaky.",
    "short8": " musí být delší než 8 znaky.",
    "long": " je příliš dlouhý.",
    "same": " musí být stejné.",
}

const validationError = (element, error) => {
    console.log(error);
    element.style.borderColor = "red";
    errorLabel.value = error;
    errorLabel.style.display = "block";
}

const validationOk = (element) => {
    element.style.borderColor = "var(--line)";
    errorLabel.style.display = "none";
    errorLabel.value = "";
}

const formEventListener = (form, hander) => {
    if (form) {
        // form.addEventListener("onsubmit", () => { return hander(form); });
        form.onsubmit = () => { return hander(form); };
    }
}