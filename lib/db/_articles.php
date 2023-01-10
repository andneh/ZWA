<?php
function addArticle(
    $uid,
    $title,
    $text
)
{
    // Function to add new article right to DB
    // hashing the article TODO
    $hash = "hash";
    $data = loadDB();
    // adding article to the data array
    $aid = uniqid();
    // $data['articles'][$aid] = article($aid, $uid, $title, $text, $hash);
    $new = array($aid => article($aid, $uid, $title, $text, $hash));
    $data['articles'] = array_merge($new, $data['articles']);
    saveDB($data);
}

function getArticles()
{
    // function of get all article from the data array
    return loadDB()["articles"];
}
function getArticleByAid($aid)
{
    return getArticles()[$aid];
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
    unset($data["articles"][$aid]);
    saveDB($data);
}