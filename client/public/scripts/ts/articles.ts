export { article } from "./types"

const api: article[] = [
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
]

api.map((data: api): HTMLElement => {
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = data.title;
    p.textContent = data.text;

    article.appendChild(h2);
    article.appendChild(p);

    return article;
});

const show_articles = (main: HTMLElement) => {
    api.forEach((article: HTMLElement) => main.appendChild(article));
}
export default show_articles;