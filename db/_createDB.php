<?php
require("user/_createUser.php");
require("article/_createArticle.php");

$db = array(
    "users" => array(createUser("root", "Foo", "Bar", "root")),
    "articles" => array(createArticle(0, "Title", "Text content.")),
);

$json = json_encode($db);

file_put_contents('db.json', $json);
?>