"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_articles = void 0;
const create_articles = (api) => {
    const articles = document.createElement('div');
    articles.className = "articles";
    api.forEach((data) => {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.textContent = data.title;
        p.textContent = data.text;
        article.appendChild(h2);
        article.appendChild(p);
        articles.appendChild(article);
    });
    return articles;
};
exports.create_articles = create_articles;
