<?php
// require("db/_db.php");

function addArticle(
    $title,
    $text
)
{
    $hash = "hash";
    $data = loadDB();
    array_push($data['articles'], article(1, $title, $text, $hash));
    saveDB($data);
}

function getArticles()
{
    return loadDB()["articles"];
}

//TODO get articles by uid
?>