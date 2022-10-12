const express = require("express");

const app = express();
const port = 3000;

// const app = new expressive.App();

// app.use(express.simpleLog());
// app.use(express.static_("./public"));
// app.use(express.bodyParser.json());




app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/api/todos", async (req, res) => {
    await res.json([{ name: "Buy some milk" }]);
});
// route with dynamic parameter
app.get("/api/user/{user_id}", async (req, res) => {
    await res.json([
        { id: req.params.user_id, name: "Jim Doe", phone: "12425323" },
    ]);
});




// const server = await app.listen(port);



app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
// console.log("app listening on port " + server.port);