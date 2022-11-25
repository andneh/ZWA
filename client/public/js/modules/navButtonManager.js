export default class nav {
    constructor(selector, handler, fillFlag = true) {
        this.button = document.querySelector(selector);
        this.fillFlag = fillFlag
        this.button.addEventListener('click', () => {
            handler()
            this.fill()
        });
    }
    fill() {
        if (this.fillFlag === true) {
            document.querySelectorAll("nav button").forEach(e => e.style.background = "var(--black)");
            this.button.style.background = "var(--background)";
            this.button.style.borderRadius = "10px 10px -10px -10px"
        }
    }
}