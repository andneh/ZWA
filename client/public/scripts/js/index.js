// import * as dom from "./dom.js";
class page {
    constructor(selector) {
        this.element = document.querySelector(selector);
        var self = this;
        this.show = () => {
            console.log(self.element);
            document.querySelectorAll("main>div").forEach(e => e.style.display = "none");
            self.element.style.display = "block";
        }
    };
}


const main = {
    articles: new page('main div.articles'),
    profile: new page('main div.articles'),
    about: new page('main div.articles'),
}
const nav = {
    article: new button('button.articles'),
    profile: new button('button.profile'),
    about: new button('button.about'),
}


dom.main.articles.show();