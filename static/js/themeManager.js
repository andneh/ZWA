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

const toggleTheme = () => {
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
    const cookies = localStorage.getItem(theme.item);
    switch (cookies) {
        case null:
            theme.set(theme.light);
            break;
        default:
            theme.set(cookies);
    }
}


const themeButton = document.querySelector("a.nav.theme");
themeButton.addEventListener("click", toggleTheme);