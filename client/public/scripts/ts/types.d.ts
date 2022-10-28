// interface article {
//     name: string;
//     data: string;
//     title: string;
//     text: string;
//     prev_hash: string;
// };

type api_data = {
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

export { api_data, login }