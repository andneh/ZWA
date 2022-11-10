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
        this.button.addEventListener('click', () => { page.show(); });
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
    articles: new nav('nav>button.articles', pages.articles),
    login: new nav("nav>button.log", pages.login),
    registr: new nav("nav>button.reg", pages.register),
    profile: new nav('nav>button.profile', pages.profile),
    about: new nav('nav>button.about', pages.about),
};

pages.profile.show();