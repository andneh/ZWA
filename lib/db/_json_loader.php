<?php
require("items/_article.php");
require("items/_user.php");
// require user and article units constructors
define('DB', 'db/db.json');
// defining DB const name

function saveDB($data)
{
    // function for saving DB which need data array with all database in it
    file_put_contents(DB, json_encode($data));
}


function loadDB()
{
    // function of loading db all data into one array with name data
    $json = file_get_contents(DB);
    if ($json == NULL) {
        // check if database exist
        $data = array(
            "users" => array(user("root", "Foo", "Bar", "root")),
            "articles" => array(article(0, "Title", "Text content.", "HASH"))
        );
        saveDB($data);
        return ($data);
    }
    return json_decode($json, JSON_OBJECT_AS_ARRAY);
}
