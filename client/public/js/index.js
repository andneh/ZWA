import { page, articlesWrapper, nav } from "./modules/elements.js";
import { toggleTheme, loadTheme } from "./modules/theme.js";

loadTheme();

const pages = {
    articles: new page('.page.articles',),
    login: new page('.page.login'),
    registr: new page('.page.registr'),
    profile: new page('.page.profile',),
    about: new page('.page.about'),
};

const wrappers = {
    articles: new articlesWrapper("url", ".page.articles .wrapper.articles"),
    profile: new articlesWrapper("url", ".page.profile .wrapper.articles"),
}

const navig = {
    articles: new nav('.nav.articles', () => { pages.articles.show(); wrappers.articles.load(); }),
    login: new nav(".nav.login", () => { pages.login.show() }),
    registr: new nav(".nav.registr", () => { pages.registr.show() }),
    profile: new nav('.nav.profile', () => { pages.profile.show(); wrappers.profile.load(); }),
    about: new nav('.nav.about', () => { pages.about.show() }),
    theme: new nav(".nav.theme", () => { toggleTheme() }, false),
};

navig.articles.button.click();