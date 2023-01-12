// error element selector
const errorLabel = document.querySelector("p.error.hidden");

// add event listener for forms
formEventListener(document.forms.article, articleValidation);
formEventListener(document.forms.registration, registrationValidation);
formEventListener(document.forms.login, loginValidation);