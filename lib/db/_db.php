<?php
require("items/_article.php");
require("items/_user.php");

define('DB', 'db/db.json');

function saveDB($data)
{
    file_put_contents(DB, json_encode($data));
}

function loadDB()
{
    $json = file_get_contents(DB);
    if ($json == NULL) {
        $data = array(
            "users" => array(user("root", "Foo", "Bar", "root")),
            "articles" => array(article(0, "Title", "Text content.", "HASH"))
        );
        saveDB($data);
        return ($data);
    }
    return json_decode($json, JSON_OBJECT_AS_ARRAY);
}




?>