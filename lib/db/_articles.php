<?php
function addArticle(
    $uid,
    $title,
    $text
) {
    // Function to add new article right to DB
    // hashing the article TODO
    $hash = "hash";
    $data = loadDB();
    // adding article to the data array
    array_push($data['articles'], article($uid, $title, $text, $hash));
    saveDB($data);
}

function getArticles()
{
    // function of get all article from the data array
    return loadDB()["articles"];
}
function getArticlesByAid($aid)
{
    foreach (getArticles() as $article) {
        if ($aid == $article['aid']) {
            return $article;
        }
    }
}

function getArticlesByUid($uid)
{
    // get article units from data array by user id
    $articles = array();

    foreach (getArticles() as $article) {
        if ($uid == $article['uid']) {
            array_push($articles, $article);
        }
    }
    // return answer
    return $articles;
}

function deleteArticle($aid)
{
    $data = loadDB();
    for ($i = 0; $i < count($data["articles"]); $i++) {
        if ($data["articles"][$i]["aid"] == $aid) {
            unset($data["articles"][$i]);
            saveDB($data);
            return;
        }
    }
}
