"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const articles_1 = require("./articles");
const api = [
    {
        name: "Andrii",
        date: "21.22.1222",
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
const main = document.querySelector('main');
const articles = (0, articles_1.create_articles)(api);
console.log("123");
const show_articles = () => {
    if (main != null) {
        main.innerHTML = "";
        main.appendChild(articles);
    }
};
const show_about = () => {
    if (main != null) {
        main.innerHTML = "";
    }
    console.log("123");
};
