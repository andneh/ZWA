class page {
    constructor(selector) {
        this.div = document.querySelector(selector);
    }

    show() {
        document.querySelectorAll("main>div.page").forEach(e => e.style.display = "none");
        this.div.style.display = "block";
    }

}

class articlesWrapper {
    constructor(api, selector) {
        this.api = api
        this.wrapper = document.querySelector(selector)
    }

    fetch(url) {
        return [
            {
                title: "Title",
                firstName: "Andrii",
                lastName: "Nehalchuk",
                date: "12.12.1212",
                hash: "12345",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim illo ipsam voluptates itaque culpa? Accusamus voluptatum officiis aperiam. Quam odio accusamus ullam minus, voluptatibus voluptatem nihil, vitae, eos sit iste deserunt quibusdam omnis eveniet praesentium at culpa esse quasi voluptates reprehenderit. Magni, esse! Tempore modi dolorum magni voluptatum assumenda iure unde doloribus, magnam error? Cum quam sit porro harum nesciunt delectus eveniet enim, sunt ducimus ex necessitatibus maxime quibusdam quis id, ea ut nihil. Harum autem beatae exercitationem totam libero distinctio pariatur, fugiat voluptates dolor ex placeat eius quia illum quo ea, cupiditate obcaecati molestiae soluta aut nisi, provident nostrum. Mollitia at libero molestiae laborum harum sint nisi explicabo quasi beatae velit praesentium ea quis architecto error, dolor voluptate temporibus? Magnam tempore culpa perspiciatis quidem ut fuga vitae dolore eveniet molestiae suscipit! Ex consequatur sed repellat maxime corrupti tenetur. Tempora, repellendus officia cupiditate id provident maiores? Facere, accusantium. Accusamus nisi officia rerum? Dolore voluptatum exercitationem tenetur dolor impedit optio nostrum, vitae corrupti doloremque animi placeat quasi error deserunt in nulla quidem, laboriosam pariatur ratione, cupiditate consectetur iste eaque voluptas? Temporibus cumque suscipit sed, commodi debitis nisi. Fugiat quaerat omnis doloremque animi itaque velit quo voluptas, alias obcaecati libero accusantium eius placeat quas, doloribus maxime, maiores a aut et qui sapiente repudiandae id eligendi. Fuga repudiandae odit ipsam vitae assumenda aliquid laudantium similique culpa quaerat voluptate provident, modi minima cupiditate labore. Earum, eligendi unde, qui soluta amet, molestias eos temporibus maiores nulla autem tempora ut odio quam. Aperiam placeat commodi impedit explicabo eveniet obcaecati optio magni dicta! Alias sint similique vitae ab itaque, labore iste atque nisi necessitatibus assumenda sit repellat optio esse, impedit at officia incidunt fugiat qui magni? Impedit dicta provident voluptas beatae a veritatis animi laboriosam debitis omnis neque! Perspiciatis sed illo praesentium sapiente consequatur expedita eius quis aperiam, nihil numquam nisi repellendus voluptate? Error vel nostrum inventore! Placeat officiis tenetur minus quos pariatur tempore a, temporibus cum ullam fugiat eum optio eveniet odio error soluta esse libero dolorem? Culpa tempora natus architecto magnam dolore minus nostrum mollitia tempore blanditiis, voluptas itaque labore quod sint, ratione commodi quidem quaerat. Dolores odio sed praesentium voluptates explicabo. Dolore ratione incidunt minus nostrum, voluptate dicta ut alias voluptatum, non, ducimus tenetur temporibus! Fugiat voluptatem repudiandae cum veniam iure ipsa aspernatur optio enim dignissimos. Maxime minus architecto quis, molestiae nam officiis reiciendis neque ipsam explicabo ut nisi omnis suscipit saepe soluta voluptatibus quidem voluptatum quas iste voluptatem ea. Quisquam earum sint ea nulla autem perferendis aliquid consequatur, hic sequi nostrum iste omnis voluptatum, unde, eligendi ex rem. Dolor eius neque optio esse dolores molestias beatae, deserunt in nobis omnis facilis sit libero eos enim, aliquam, at explicabo amet iste molestiae assumenda reprehenderit quam rem culpa! Numquam voluptas non eaque eos sunt perspiciatis adipisci tenetur architecto veniam. Distinctio iste, minima labore nulla laborum quo iure laudantium! Officia laborum inventore accusantium magnam ullam consectetur magni quas consequatur tempore iure blanditiis amet saepe, vel reiciendis sapiente. Minima, quae voluptatibus inventore officia aliquid provident doloremque dolorum.",
            },
            {
                title: "Title",
                firstName: "Andrii",
                lastName: "Nehalchuk",
                date: "12.12.1212",
                hash: "12345",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim illo ipsam voluptates itaque culpa? Accusamus voluptatum officiis aperiam. Quam odio accusamus ullam minus, voluptatibus voluptatem nihil, vitae, eos sit iste deserunt quibusdam omnis eveniet praesentium at culpa esse quasi voluptates reprehenderit. Magni, esse! Tempore modi dolorum magni voluptatum assumenda iure unde doloribus, magnam error? Cum quam sit porro harum nesciunt delectus eveniet enim, sunt ducimus ex necessitatibus maxime quibusdam quis id, ea ut nihil. Harum autem beatae exercitationem totam libero distinctio pariatur, fugiat voluptates dolor ex placeat eius quia illum quo ea, cupiditate obcaecati molestiae soluta aut nisi, provident nostrum. Mollitia at libero molestiae laborum harum sint nisi explicabo quasi beatae velit praesentium ea quis architecto error, dolor voluptate temporibus? Magnam tempore culpa perspiciatis quidem ut fuga vitae dolore eveniet molestiae suscipit! Ex consequatur sed repellat maxime corrupti tenetur. Tempora, repellendus officia cupiditate id provident maiores? Facere, accusantium. Accusamus nisi officia rerum? Dolore voluptatum exercitationem tenetur dolor impedit optio nostrum, vitae corrupti doloremque animi placeat quasi error deserunt in nulla quidem, laboriosam pariatur ratione, cupiditate consectetur iste eaque voluptas? Temporibus cumque suscipit sed, commodi debitis nisi. Fugiat quaerat omnis doloremque animi itaque velit quo voluptas, alias obcaecati libero accusantium eius placeat quas, doloribus maxime, maiores a aut et qui sapiente repudiandae id eligendi. Fuga repudiandae odit ipsam vitae assumenda aliquid laudantium similique culpa quaerat voluptate provident, modi minima cupiditate labore. Earum, eligendi unde, qui soluta amet, molestias eos temporibus maiores nulla autem tempora ut odio quam. Aperiam placeat commodi impedit explicabo eveniet obcaecati optio magni dicta! Alias sint similique vitae ab itaque, labore iste atque nisi necessitatibus assumenda sit repellat optio esse, impedit at officia incidunt fugiat qui magni? Impedit dicta provident voluptas beatae a veritatis animi laboriosam debitis omnis neque! Perspiciatis sed illo praesentium sapiente consequatur expedita eius quis aperiam, nihil numquam nisi repellendus voluptate? Error vel nostrum inventore! Placeat officiis tenetur minus quos pariatur tempore a, temporibus cum ullam fugiat eum optio eveniet odio error soluta esse libero dolorem? Culpa tempora natus architecto magnam dolore minus nostrum mollitia tempore blanditiis, voluptas itaque labore quod sint, ratione commodi quidem quaerat. Dolores odio sed praesentium voluptates explicabo. Dolore ratione incidunt minus nostrum, voluptate dicta ut alias voluptatum, non, ducimus tenetur temporibus! Fugiat voluptatem repudiandae cum veniam iure ipsa aspernatur optio enim dignissimos. Maxime minus architecto quis, molestiae nam officiis reiciendis neque ipsam explicabo ut nisi omnis suscipit saepe soluta voluptatibus quidem voluptatum quas iste voluptatem ea. Quisquam earum sint ea nulla autem perferendis aliquid consequatur, hic sequi nostrum iste omnis voluptatum, unde, eligendi ex rem. Dolor eius neque optio esse dolores molestias beatae, deserunt in nobis omnis facilis sit libero eos enim, aliquam, at explicabo amet iste molestiae assumenda reprehenderit quam rem culpa! Numquam voluptas non eaque eos sunt perspiciatis adipisci tenetur architecto veniam. Distinctio iste, minima labore nulla laborum quo iure laudantium! Officia laborum inventore accusantium magnam ullam consectetur magni quas consequatur tempore iure blanditiis amet saepe, vel reiciendis sapiente. Minima, quae voluptatibus inventore officia aliquid provident doloremque dolorum.",
            },
            {
                title: "Title",
                firstName: "Andrii",
                lastName: "Nehalchuk",
                date: "12.12.1212",
                hash: "12345",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim illo ipsam voluptates itaque culpa? Accusamus voluptatum officiis aperiam. Quam odio accusamus ullam minus, voluptatibus voluptatem nihil, vitae, eos sit iste deserunt quibusdam omnis eveniet praesentium at culpa esse quasi voluptates reprehenderit. Magni, esse! Tempore modi dolorum magni voluptatum assumenda iure unde doloribus, magnam error? Cum quam sit porro harum nesciunt delectus eveniet enim, sunt ducimus ex necessitatibus maxime quibusdam quis id, ea ut nihil. Harum autem beatae exercitationem totam libero distinctio pariatur, fugiat voluptates dolor ex placeat eius quia illum quo ea, cupiditate obcaecati molestiae soluta aut nisi, provident nostrum. Mollitia at libero molestiae laborum harum sint nisi explicabo quasi beatae velit praesentium ea quis architecto error, dolor voluptate temporibus? Magnam tempore culpa perspiciatis quidem ut fuga vitae dolore eveniet molestiae suscipit! Ex consequatur sed repellat maxime corrupti tenetur. Tempora, repellendus officia cupiditate id provident maiores? Facere, accusantium. Accusamus nisi officia rerum? Dolore voluptatum exercitationem tenetur dolor impedit optio nostrum, vitae corrupti doloremque animi placeat quasi error deserunt in nulla quidem, laboriosam pariatur ratione, cupiditate consectetur iste eaque voluptas? Temporibus cumque suscipit sed, commodi debitis nisi. Fugiat quaerat omnis doloremque animi itaque velit quo voluptas, alias obcaecati libero accusantium eius placeat quas, doloribus maxime, maiores a aut et qui sapiente repudiandae id eligendi. Fuga repudiandae odit ipsam vitae assumenda aliquid laudantium similique culpa quaerat voluptate provident, modi minima cupiditate labore. Earum, eligendi unde, qui soluta amet, molestias eos temporibus maiores nulla autem tempora ut odio quam. Aperiam placeat commodi impedit explicabo eveniet obcaecati optio magni dicta! Alias sint similique vitae ab itaque, labore iste atque nisi necessitatibus assumenda sit repellat optio esse, impedit at officia incidunt fugiat qui magni? Impedit dicta provident voluptas beatae a veritatis animi laboriosam debitis omnis neque! Perspiciatis sed illo praesentium sapiente consequatur expedita eius quis aperiam, nihil numquam nisi repellendus voluptate? Error vel nostrum inventore! Placeat officiis tenetur minus quos pariatur tempore a, temporibus cum ullam fugiat eum optio eveniet odio error soluta esse libero dolorem? Culpa tempora natus architecto magnam dolore minus nostrum mollitia tempore blanditiis, voluptas itaque labore quod sint, ratione commodi quidem quaerat. Dolores odio sed praesentium voluptates explicabo. Dolore ratione incidunt minus nostrum, voluptate dicta ut alias voluptatum, non, ducimus tenetur temporibus! Fugiat voluptatem repudiandae cum veniam iure ipsa aspernatur optio enim dignissimos. Maxime minus architecto quis, molestiae nam officiis reiciendis neque ipsam explicabo ut nisi omnis suscipit saepe soluta voluptatibus quidem voluptatum quas iste voluptatem ea. Quisquam earum sint ea nulla autem perferendis aliquid consequatur, hic sequi nostrum iste omnis voluptatum, unde, eligendi ex rem. Dolor eius neque optio esse dolores molestias beatae, deserunt in nobis omnis facilis sit libero eos enim, aliquam, at explicabo amet iste molestiae assumenda reprehenderit quam rem culpa! Numquam voluptas non eaque eos sunt perspiciatis adipisci tenetur architecto veniam. Distinctio iste, minima labore nulla laborum quo iure laudantium! Officia laborum inventore accusantium magnam ullam consectetur magni quas consequatur tempore iure blanditiis amet saepe, vel reiciendis sapiente. Minima, quae voluptatibus inventore officia aliquid provident doloremque dolorum.",
            },
            {
                title: "Title",
                firstName: "Andrii",
                lastName: "Nehalchuk",
                date: "12.12.1212",
                hash: "12345",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim illo ipsam voluptates itaque culpa? Accusamus voluptatum officiis aperiam. Quam odio accusamus ullam minus, voluptatibus voluptatem nihil, vitae, eos sit iste deserunt quibusdam omnis eveniet praesentium at culpa esse quasi voluptates reprehenderit. Magni, esse! Tempore modi dolorum magni voluptatum assumenda iure unde doloribus, magnam error? Cum quam sit porro harum nesciunt delectus eveniet enim, sunt ducimus ex necessitatibus maxime quibusdam quis id, ea ut nihil. Harum autem beatae exercitationem totam libero distinctio pariatur, fugiat voluptates dolor ex placeat eius quia illum quo ea, cupiditate obcaecati molestiae soluta aut nisi, provident nostrum. Mollitia at libero molestiae laborum harum sint nisi explicabo quasi beatae velit praesentium ea quis architecto error, dolor voluptate temporibus? Magnam tempore culpa perspiciatis quidem ut fuga vitae dolore eveniet molestiae suscipit! Ex consequatur sed repellat maxime corrupti tenetur. Tempora, repellendus officia cupiditate id provident maiores? Facere, accusantium. Accusamus nisi officia rerum? Dolore voluptatum exercitationem tenetur dolor impedit optio nostrum, vitae corrupti doloremque animi placeat quasi error deserunt in nulla quidem, laboriosam pariatur ratione, cupiditate consectetur iste eaque voluptas? Temporibus cumque suscipit sed, commodi debitis nisi. Fugiat quaerat omnis doloremque animi itaque velit quo voluptas, alias obcaecati libero accusantium eius placeat quas, doloribus maxime, maiores a aut et qui sapiente repudiandae id eligendi. Fuga repudiandae odit ipsam vitae assumenda aliquid laudantium similique culpa quaerat voluptate provident, modi minima cupiditate labore. Earum, eligendi unde, qui soluta amet, molestias eos temporibus maiores nulla autem tempora ut odio quam. Aperiam placeat commodi impedit explicabo eveniet obcaecati optio magni dicta! Alias sint similique vitae ab itaque, labore iste atque nisi necessitatibus assumenda sit repellat optio esse, impedit at officia incidunt fugiat qui magni? Impedit dicta provident voluptas beatae a veritatis animi laboriosam debitis omnis neque! Perspiciatis sed illo praesentium sapiente consequatur expedita eius quis aperiam, nihil numquam nisi repellendus voluptate? Error vel nostrum inventore! Placeat officiis tenetur minus quos pariatur tempore a, temporibus cum ullam fugiat eum optio eveniet odio error soluta esse libero dolorem? Culpa tempora natus architecto magnam dolore minus nostrum mollitia tempore blanditiis, voluptas itaque labore quod sint, ratione commodi quidem quaerat. Dolores odio sed praesentium voluptates explicabo. Dolore ratione incidunt minus nostrum, voluptate dicta ut alias voluptatum, non, ducimus tenetur temporibus! Fugiat voluptatem repudiandae cum veniam iure ipsa aspernatur optio enim dignissimos. Maxime minus architecto quis, molestiae nam officiis reiciendis neque ipsam explicabo ut nisi omnis suscipit saepe soluta voluptatibus quidem voluptatum quas iste voluptatem ea. Quisquam earum sint ea nulla autem perferendis aliquid consequatur, hic sequi nostrum iste omnis voluptatum, unde, eligendi ex rem. Dolor eius neque optio esse dolores molestias beatae, deserunt in nobis omnis facilis sit libero eos enim, aliquam, at explicabo amet iste molestiae assumenda reprehenderit quam rem culpa! Numquam voluptas non eaque eos sunt perspiciatis adipisci tenetur architecto veniam. Distinctio iste, minima labore nulla laborum quo iure laudantium! Officia laborum inventore accusantium magnam ullam consectetur magni quas consequatur tempore iure blanditiis amet saepe, vel reiciendis sapiente. Minima, quae voluptatibus inventore officia aliquid provident doloremque dolorum.",
            },
            {
                title: "Title",
                firstName: "Andrii",
                lastName: "Nehalchuk",
                date: "12.12.1212",
                hash: "12345",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim illo ipsam voluptates itaque culpa? Accusamus voluptatum officiis aperiam. Quam odio accusamus ullam minus, voluptatibus voluptatem nihil, vitae, eos sit iste deserunt quibusdam omnis eveniet praesentium at culpa esse quasi voluptates reprehenderit. Magni, esse! Tempore modi dolorum magni voluptatum assumenda iure unde doloribus, magnam error? Cum quam sit porro harum nesciunt delectus eveniet enim, sunt ducimus ex necessitatibus maxime quibusdam quis id, ea ut nihil. Harum autem beatae exercitationem totam libero distinctio pariatur, fugiat voluptates dolor ex placeat eius quia illum quo ea, cupiditate obcaecati molestiae soluta aut nisi, provident nostrum. Mollitia at libero molestiae laborum harum sint nisi explicabo quasi beatae velit praesentium ea quis architecto error, dolor voluptate temporibus? Magnam tempore culpa perspiciatis quidem ut fuga vitae dolore eveniet molestiae suscipit! Ex consequatur sed repellat maxime corrupti tenetur. Tempora, repellendus officia cupiditate id provident maiores? Facere, accusantium. Accusamus nisi officia rerum? Dolore voluptatum exercitationem tenetur dolor impedit optio nostrum, vitae corrupti doloremque animi placeat quasi error deserunt in nulla quidem, laboriosam pariatur ratione, cupiditate consectetur iste eaque voluptas? Temporibus cumque suscipit sed, commodi debitis nisi. Fugiat quaerat omnis doloremque animi itaque velit quo voluptas, alias obcaecati libero accusantium eius placeat quas, doloribus maxime, maiores a aut et qui sapiente repudiandae id eligendi. Fuga repudiandae odit ipsam vitae assumenda aliquid laudantium similique culpa quaerat voluptate provident, modi minima cupiditate labore. Earum, eligendi unde, qui soluta amet, molestias eos temporibus maiores nulla autem tempora ut odio quam. Aperiam placeat commodi impedit explicabo eveniet obcaecati optio magni dicta! Alias sint similique vitae ab itaque, labore iste atque nisi necessitatibus assumenda sit repellat optio esse, impedit at officia incidunt fugiat qui magni? Impedit dicta provident voluptas beatae a veritatis animi laboriosam debitis omnis neque! Perspiciatis sed illo praesentium sapiente consequatur expedita eius quis aperiam, nihil numquam nisi repellendus voluptate? Error vel nostrum inventore! Placeat officiis tenetur minus quos pariatur tempore a, temporibus cum ullam fugiat eum optio eveniet odio error soluta esse libero dolorem? Culpa tempora natus architecto magnam dolore minus nostrum mollitia tempore blanditiis, voluptas itaque labore quod sint, ratione commodi quidem quaerat. Dolores odio sed praesentium voluptates explicabo. Dolore ratione incidunt minus nostrum, voluptate dicta ut alias voluptatum, non, ducimus tenetur temporibus! Fugiat voluptatem repudiandae cum veniam iure ipsa aspernatur optio enim dignissimos. Maxime minus architecto quis, molestiae nam officiis reiciendis neque ipsam explicabo ut nisi omnis suscipit saepe soluta voluptatibus quidem voluptatum quas iste voluptatem ea. Quisquam earum sint ea nulla autem perferendis aliquid consequatur, hic sequi nostrum iste omnis voluptatum, unde, eligendi ex rem. Dolor eius neque optio esse dolores molestias beatae, deserunt in nobis omnis facilis sit libero eos enim, aliquam, at explicabo amet iste molestiae assumenda reprehenderit quam rem culpa! Numquam voluptas non eaque eos sunt perspiciatis adipisci tenetur architecto veniam. Distinctio iste, minima labore nulla laborum quo iure laudantium! Officia laborum inventore accusantium magnam ullam consectetur magni quas consequatur tempore iure blanditiis amet saepe, vel reiciendis sapiente. Minima, quae voluptatibus inventore officia aliquid provident doloremque dolorum.",
            }
        ]
    }

    createArticle(data) {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2><u>${data.title}</u></h2>
            <p>${data.text}</p>
            <div class="info">
                <h3>${data.firstName + " " + data.lastName}</h3>
                <h3>${data.date}</h3>
                <h3>${data.hash}</h3>
            </div>
            <hr>
        `;
        return article
    }

    load() {
        this.fetch(this.api).map(data => this.createArticle(data)).forEach(article => { this.wrapper.appendChild(article) });
    }
}

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

export {
    page,
    articlesWrapper,
    nav,
}


