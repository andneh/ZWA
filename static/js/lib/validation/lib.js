// errors texts
const errors = {
    "empty": " nesmí být prázdné.",
    "uniq": " již obsazeno, zkuste to znovu.",
    "short4": " musí být delší než 4 znaky.",
    "short8": " musí být delší než 8 znaky.",
    "long": " je příliš dlouhý.",
    "same": " musí být stejné.",
}

// alert of error
const validationError = (element, error) => {
    console.log(error);
    element.style.borderColor = "red";
    errorLabel.textContent = error;
    errorLabel.style.display = "block";
    element.focus();
}

// remove alert of error
const validationOk = (element) => {
    element.style.borderColor = "var(--line)";
    errorLabel.style.display = "none";
    errorLabel.value = "";
}

// add event listener for form
const formEventListener = (form, hander) => {
    // check if form on page
    if (form) {
        // form.addEventListener("submit", () => { return hander(form); });
        form.onsubmit = () => { return hander(form); };
    }
}