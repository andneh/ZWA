export default class nav {
    constructor(selector, page) {
        this.button = document.querySelector(selector);
        this.button.addEventListener('click', () => {

            page.show();

            document.querySelectorAll("nav button").forEach(e => e.style.background = "var(--black)");
            this.button.style.background = "var(--background)";
            this.button.style.borderRadius = "10px 10px -10px -10px"
        });
    }
}