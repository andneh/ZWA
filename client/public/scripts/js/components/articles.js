const articles_page = (api) => {
    const conteiner = document.createElement('div');
    conteiner.className = "conteiner articles";

    api.forEach((data) => {

        const title = document.createElement("h2");
        title.textContent = data.title;

        const text = document.createElement("p");
        text.textContent = data.text;

        const article = document.createElement("article");
        article.appendChild(title);
        article.appendChild(text);

        conteiner.appendChild(article);
    });
    return conteiner;
};

export default articles_page;