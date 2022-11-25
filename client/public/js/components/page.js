class page {
    constructor(selector) {
        this.div = document.querySelector(selector);
    }

    show() {
        document.querySelectorAll("main>div.page").forEach(e => e.style.display = "none");
        this.div.style.display = "block";
    }

}