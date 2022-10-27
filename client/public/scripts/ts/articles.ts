import { api_data } from "./types";

const create_articles = (api: api_data[]): HTMLDivElement => {
    const articles = document.createElement('div');
    articles.className = "articles";

    api.forEach((data: api_data) => {
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
}

export { create_articles };