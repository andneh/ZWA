"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.article = void 0;
var types_1 = require("./types");
Object.defineProperty(exports, "article", { enumerable: true, get: function () { return types_1.article; } });
const api = [
    {
        name: "Andrii",
        data: "21.22.1222",
        title: "New Iphone",
        text: 'hello, today i saw a new iphone',
        prev_hash: "12312"
    },
    {
        name: "Andrii",
        date: "21.22.1222",
        title: "New Iphone",
        text: 'hello, today i saw a new iphone',
        prev_hash: "12312"
    }
];
api.map((data) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = data.title;
    p.textContent = data.text;
    article.appendChild(h2);
    article.appendChild(p);
    return article;
});
const show_articles = (main) => {
    api.forEach((article) => main.appendChild(article));
};
exports.default = show_articles;
