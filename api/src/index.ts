const express = require("express");
import { json } from 'stream/consumers';
import * as db from './modules/db';

const app = express();
const port = 3000;

app.get("/api/", async (req: any, res: any) => {
    db.run_async_query("select * from articles limit 500;", "Getting items").then(data => {
        res.json(
            data
        );
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});