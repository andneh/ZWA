const showPage = (classPage) => {
    document.querySelectorAll("main>div.page").forEach(e => {
        if (e.className == `page ${classPage}`) {
            e.style.display = "block"
        } else {
            e.style.display = "none"
        }
    });

}