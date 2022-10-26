const express = require("express");


const app = express();
const port = 3000;

app.get("/api/", async (req, res) => {
    await res.send("123");
});

app.get("/api/todos", async (req, res) => {
    await res.json([
        { name: "Buy some milk" },
        { name: "Buy some oil" },
        { name: "Buy some chees" },
        { name: "Buy some bread" },
    ]);
});

// route with dynamic parameter
app.get("/api/user/", async (req, res) => {
    await res.json([
        { id: 0, name: "Jim Doe", phone: "12425323" },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});