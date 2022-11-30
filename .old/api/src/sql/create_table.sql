-- create table
CREATE TABLE articles (
        author varchar,
        date varchar,
        title varchar,
        text varchar,
        prev_hash varchar,
        this_hash varchar,
    ); 

-- show all tables;
\dt;

-- show all items
select * from articles;

-- drop
drop table articles; 