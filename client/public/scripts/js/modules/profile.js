const profile_page = (api) => {
    const conteiner = document.createElement('div');
    conteiner.className = "conteiner profile";

    const title = document.createElement("h2");
    title.textContent = "PROFILE";

    conteiner.appendChild(title);

    return conteiner;
};

export default profile_page;
