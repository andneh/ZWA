export default class page {
    constructor(selector, manager = undefined) {
        this.div = document.querySelector(selector);
        if (manager != undefined) {
            this.manager = manager;
            this.load = this.manager.load()
        }
    }

    load() {

    }

    show() {
        document.querySelectorAll("main>div.page").forEach(e => e.style.display = "none");
        this.div.style.display = "block";
    }

}