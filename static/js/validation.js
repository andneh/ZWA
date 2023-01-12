const errorLabel = document.querySelector("p.error.hidden");

formEventListener(document.forms.article, articleValidation);
formEventListener(document.forms.registration, registrationValidation);
formEventListener(document.forms.login, loginValidation);