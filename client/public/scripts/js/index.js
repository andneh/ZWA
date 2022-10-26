"use strict";
const main = document.querySelector("main");
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
api.forEach((data) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = data.title;
    p.textContent = data.text;
    article.appendChild(h2);
    article.appendChild(p);
    main.appendChild(article);
});
