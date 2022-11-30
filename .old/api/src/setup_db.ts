import * as db from './modules/db';
import { article_data } from "./types";
import basic_data from './modules/basic_data';

const table_name = "articles";
const data_parameters = [
    "author",
    "date",
    "title",
    "text",
    "prev_hash",
    "this_hash",
];


const create_table_query = `
    CREATE TABLE articles (
        ${data_parameters[0]} varchar,
        ${data_parameters[1]} varchar,
        ${data_parameters[2]} varchar,
        ${data_parameters[3]} varchar,
        ${data_parameters[4]} varchar,
        ${data_parameters[5]} varchar
    );`;


let insert_items_query = `INSERT INTO ${table_name} (
    ${data_parameters[0]},
    ${data_parameters[1]},
    ${data_parameters[2]}, 
    ${data_parameters[3]},
    ${data_parameters[4]}, 
    ${data_parameters[5]}
    ) VALUES \n`;

db.run_async_query(create_table_query, "Creating Table").finally(() => {
    let i = 1;
    basic_data.forEach((data: article_data) => {
        insert_items_query += `(
            '${data.author}', 
            '${data.date}', 
            '${data.title}', 
            '${data.text}', 
            '${data.prev_hash}', 
            '${data.this_hash}'
            )${(basic_data.length != i) ? ',' : ';'} \n`;
        i += 1
    });
    db.run_async_query(insert_items_query, "Inserting items").finally(() => {
        db.run_async_query(`SELECT * FROM ${table_name};`, "Selecting").then((res: any) => { console.log(res) })
        // db.drop_flats()
    });
});
