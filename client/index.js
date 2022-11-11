class page {
    constructor(selector, manager = undefined) {
        this.div = document.querySelector(selector);
        if (manager != undefined) {
            this.manager = manager;
            this.load = this.manager.load()
        }
    }

    load() {

    }

    show() {
        document.querySelectorAll("main>div.page").forEach(e => e.style.display = "none");
        this.div.style.display = "block";
    }

}

class nav {
    constructor(selector, page) {
        this.button = document.querySelector(selector);
        this.button.addEventListener('click', () => {
            page.show();
            document.querySelectorAll("nav button").forEach(e => e.style.background = "var(--black)");
            this.button.style.background = "var(--background)";
            this.button.style.borderRadius = "10px 10px -10px -10px"
        });
    }
}



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
};

navig.articles.button.click()