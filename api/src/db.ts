const pg = require('pg');

interface Connection {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
};

const connection: Connection = {
    host: 'db',
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
};

const run_async_querry = async (log_msg: string, query: string) => {
    console.log(log_msg);

    const client = new pg.Client(connection);

    client.connect(err => console.log(err ? err : "1. DB connected."));

    return await client.query(query).then((err, res) => {
        console.log(err ? "2. DB querried." : err);
        client.end().then(console.log("3. DB Disconnected.\n"));
        return res ? res.rows : undefined;
    });
}

module.exports = {
    run_async_querry
}