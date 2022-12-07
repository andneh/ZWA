"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = __importStar(require("./modules/db"));
const basic_data_1 = __importDefault(require("./modules/basic_data"));
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
    basic_data_1.default.forEach((data) => {
        insert_items_query += `(
            '${data.author}', 
            '${data.date}', 
            '${data.title}', 
            '${data.text}', 
            '${data.prev_hash}', 
            '${data.this_hash}'
            )${(basic_data_1.default.length != i) ? ',' : ';'} \n`;
        i += 1;
    });
    db.run_async_query(insert_items_query, "Inserting items").finally(() => {
        db.run_async_query(`SELECT * FROM ${table_name};`, "Selecting").then((res) => { console.log(res); });
        // db.drop_flats()
    });
});
