const express = require("express");
import { json } from 'stream/consumers';
import * as db from './modules/db';
import { flat } from './types/flat';

const app = express();
const port = 3000;

const api = [
    {
        name: "Andrii",
        data: "21.22.1222",
        title: "New Iphone",
        text: 'hello, today i saw a new iphone',
        prev_hash: "12312"
    },
    {
        name: "Andrii",
        data: "21.22.1222",
        title: "New Iphone",
        text: 'hello, today i saw a new iphone',
        prev_hash: "12312"
    }
]

app.get("/api/", async (req: any, res: any) => {
    const data = await db.run_async_query("select * from flat_table limit 500;", "Getting items");
    res.json(
        api
    );
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});