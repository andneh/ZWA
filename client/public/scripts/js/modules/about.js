const about_page = () => {
    const conteiner = document.createElement('div');
    conteiner.className = "conteiner about";

    const title = document.createElement("h2");
    title.textContent = "ABOUT";

    conteiner.appendChild(title);

    return conteiner;
};

export default about_page;
