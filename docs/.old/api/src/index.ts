const express = require("express");
import { json } from 'stream/consumers';
import * as db from './modules/db';

const app = express();
const port = 3000;

app.get("/api/", async (req: any, res: any) => {
    db.run_async_query("select * from articles limit 500;", "getting items").then(data => {
        res.json(
            data
        );
    });
});

app.post("/api/resgistr", async (req: any, res: any) => {
    return;
})

app.post("/api/login", async (req: any, res: any) => {
    return;
})

app.post("/api/article", async (req: any, res: any) => {
    return;
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}!`);
});