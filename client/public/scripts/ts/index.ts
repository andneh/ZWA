import { api_data } from "./types";
import { create_articles } from "./articles";

const api: api_data[] = [
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
const articles = create_articles(api);

console.log("123");

const show_articles = () => {
    if (main != null) {
        main.innerHTML = "";
        main.appendChild(articles);
    }
}
const show_about = () => {
    if (main != null) {
        main.innerHTML = "";
    }
    console.log("123");
}



