// theme object 
const theme = {
    item: "theme",
    light: "light",
    dark: "dark",
    set: function (theme) {
        localStorage.setItem(this.item, theme);
        document.querySelector("link.theme").href = "./static/css/themes/" + theme + ".css";
        document.querySelector("img.theme").src = "./static/imgs/logo/" + theme + ".png";
    },
}

// toggle func of theme
const toggleTheme = () => {
    // cases for themes based on local storage
    switch (localStorage.getItem(theme.item)) {
        case null:
            theme.set(theme.light);
            break;

        case theme.light:
            theme.set(theme.dark);
            break;

        case theme.dark:
            theme.set(theme.light);
            break;
    }
}

{
    // get settings from cookies
    const cookies = localStorage.getItem(theme.item);
    // load theme
    switch (cookies) {
        case null:
            theme.set(theme.light);
            break;
        default:
            theme.set(cookies);
    }
}

// add toggle to event listener
document.querySelector("a.nav.theme").addEventListener("click", toggleTheme);