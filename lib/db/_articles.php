<?php
function addArticle(
    $title,
    $text
) {
    // Function to add new article right to DB
    // hashing the article TODO
    $hash = "hash";
    $data = loadDB();
    // adding article to the data array
    array_push($data['articles'], article(1, $title, $text, $hash));
    saveDB($data);
}

function getArticles()
{
    // function of get all article from the data array
    return loadDB()["articles"];
}

function getArticleByUid($uid)
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
