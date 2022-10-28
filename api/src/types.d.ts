export interface db_connection {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

type article_data = {
    author: string;
    date: string;
    title: string;
    text: string;
    prew_hash: char[5];
    this_hash: char[5];
};

interface login {
    login: string;
    password: string;
};

export { db_connection, api_data, login }