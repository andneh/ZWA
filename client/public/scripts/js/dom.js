import page from "./components/page";


const main = {
    articles: new page('main>div.articles'),
    profile: new page('main>div.articles'),
    about: new page('main>div.articles'),
}

const nav = {
    article: document.querySelector('button.articles'),
    profile: document.querySelector('button.profile'),
    about: document.querySelector('button.about'),
}

export {
    main,
    nav,
};


const a = document.querySelectorAll("main div");
