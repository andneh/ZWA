const express = require("express");
import { routers } from "./routers.mjs";

const app = express();
const port = 3000;

routers(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});