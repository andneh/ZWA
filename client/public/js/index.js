import page from "./modules/page.js";
import nav from "./modules/nav.js";
import { toggleTheme, loadTheme } from "./modules/theme.js";

const pages = {
    articles: new page('div.page.articles'),
    login: new page('div.page.login'),
    registr: new page('div.page.registr'),
    profile: new page('div.page.profile'),
    about: new page('div.page.articles'),
};

const navig = {
    articles: new nav('.nav.articles', pages.articles),
    login: new nav(".nav.login", pages.login),
    registr: new nav(".nav.registr", pages.registr),
    profile: new nav('.nav.profile', pages.profile),
    about: new nav('.nav.about', pages.about),
    theme: document.querySelector(".nav.theme"),
};

navig.theme.addEventListener("click", toggleTheme);
loadTheme();
navig.articles.button.click();