// import page from "./components/page";
// import { loadTheme, toggleTheme } from "./modules/themeManager";
loadTheme();

console.log("123");

const wrappers = {
    articles: articlesWrapper("url", ".page.articles .wrapper.articles"),
    profile: articlesWrapper("url", ".page.profile .wrapper.articles"),
}
const pages = {
    articles: page('.page.articles'),
    login: page('.page.login'),
    registr: page('.page.registr'),
    profile: page('.page.profile',),
    about: page('.page.about'),
};


document.querySelector(".nav.articles").click();