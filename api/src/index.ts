const express = require("express");
import { json } from 'stream/consumers';
import * as db from './modules/db';

const app = express();
const port = 3000;

const articles_data = [
    {
        author: "Andrii",
        date: Date(),
        title: "New Iphone",
        text: 'hello, today i saw a new iphone',
        prew_hash: "12345",
        this_hash: "54321",
    },
    {
        author: "Andrii",
        date: Date(),
        title: "New Iphone",
        text: 'hello, today i saw a new iphone',
        prew_hash: "12312",
        this_hash: "54321",
    }
];

app.get("/api/", async (req: any, res: any) => {
    const data = await db.run_async_query("select * from flat_table limit 500;", "Getting items");
    res.json(
        articles_data
    );
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});