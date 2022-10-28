import * as dom from "./dom.js";

import articles_page from "./components/articles.js";
import profile_page from "./components/profile.js";
import about_page from "./components/about.js";

import { articles_data } from "./modules/articles_api.js";


const articles = articles_page(articles_data);
const profile = profile_page(articles_data);
const about = about_page(articles_data);




const show_articles = () => {
    if (dom.main != null) {
        dom.main.innerHTML = "";
        dom.main.appendChild(articles);
    }
}
const show_profile = () => {
    if (dom.main != null) {
        dom.main.innerHTML = "";
        dom.main.appendChild(profile);
    }
}
const show_about = () => {
    if (dom.main != null) {
        dom.main.innerHTML = "";
        dom.main.appendChild(about);
    }
}

dom.article.onclick = show_articles;

dom.profile.onclick = show_profile;

dom.about.onclick = show_about;

show_articles();