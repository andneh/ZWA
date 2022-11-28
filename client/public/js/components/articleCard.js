class articleCard {
    constructor(data) {
        this.data = data
        this.article = document.createElement("article");

        this.article.innerHTML = `
        <div class="info">
            <h3>${this.data.firstName + " " + this.data.lastName}</h3>
            <h3>${this.data.date}</h3>
            <h3>${this.data.hash}</h3>
        </div>
        <h2><u>${this.data.title}</u></h2>
        <button onclick="openCard(${data})" class="nav"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M10 38V26h3v9h9v3Zm25-16v-9h-9v-3h12v12Z"/></svg></button>
        <p>${this.data.text.substring(0, 50) + "..."}</p>
        <hr>
        `;
    }

}
const openCard = (data) => {
    console.log(data.text);
}