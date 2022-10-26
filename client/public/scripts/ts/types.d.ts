interface article {
    name: string;
    data: string;
    title: string;
    text: string;
    prev_hash: string;
};

interface login {
    login: string;
    password: string;
};

export default { article, login }