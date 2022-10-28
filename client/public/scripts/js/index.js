import articles_page from "./components/articles.js";
import profile_page from "./components/profile.js";
import about_page from "./components/about.js";

import { articles_data } from "./modules/articles_api.js";

const main = document.querySelector('main');
import * as nav from "./components/nav.js";

const articles = articles_page(articles_data);
const profile = profile_page(articles_data);
const about = about_page(articles_data);

const show_articles = () => {
    if (main != null) {
        main.innerHTML = "";
        main.appendChild(articles);
    }
}
const show_profile = () => {
    if (main != null) {
        main.innerHTML = "";
        main.appendChild(profile);
    }
}
const show_about = () => {
    if (main != null) {
        main.innerHTML = "";
        main.appendChild(about);
    }
}

nav.article.onclick = show_articles;
nav.profile.onclick = show_profile;
nav.about.onclick = show_about;

show_articles();