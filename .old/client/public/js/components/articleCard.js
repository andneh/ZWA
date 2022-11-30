class articleCard {
    constructor(data) {
        this.data = data
        this.article = document.createElement("article");

        this.openButton = createBtn('<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M10 38V26h3v9h9v3Zm25-16v-9h-9v-3h12v12Z"/></svg>', "nav",)

        this.article.innerHTML = `
        <div class="info">
            <h3>${this.data.firstName + " " + this.data.lastName}</h3>
            <h3>${this.data.date}</h3>
            <h3>${this.data.hash}</h3>
        </div>
        <h2><u>${this.data.title}</u></h2>
        <p>${this.data.text.substring(0, 50) + "..."}</p>
        <hr>
        `;
        this.article.appendChild(this.openButton);

    }
}
// const openCard = (data) => {
//     const pop = document.querySelector(".openCard")
//     const closeBtn = document.createElement("button")


//     pop.innerHTML = ""

//     console.log(data.title);
//     const div = document.createElement("div")
// }




// const createBtn = (svg, className, handler) => {
//     btn = document.createElement("button")
//     // this.openButton.textContent = "123"
//     btn.innerHTML = svg;
//     btn.className = className;
//     btn.addEventListener("click", handler())
//     return btn;
// }