// interface article {
//     name: string;
//     data: string;
//     title: string;
//     text: string;
//     prev_hash: string;
// };

type api_data = {
    name: string;
    date: string;
    title: string;
    text: string;
    prev_hash: string;
};

interface login {
    login: string;
    password: string;
};

export { api_data, login }