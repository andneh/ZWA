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
        document.querySelectorAll("main>div").forEach(e => e.style.display = "none");
        this.div.style.display = "block";
    }

}

class nav {
    constructor(selector, page) {
        this.button = document.querySelector(selector);
        this.button.addEventListener('click', () => { page.show(); });
    }
}



const main = {
    articles: new page('main>div.articles'),
    profile: new page('main>div.profile'),
    about: new page('main>div.about'),
};
const navig = {
    articles: new nav('nav>button.articles', main.articles),
    profile: new nav('nav>button.profile', main.profile),
    about: new nav('nav>button.about', main.about),
};

main.profile.show();