<?php
define('DB', 'db.json');

$data = file_get_contents(DB);

if ($data == NULL) {
    include '_createUsersDB.php';
}

$articles = json_decode($articles, JSON_OBJECT_AS_ARRAY);

function addArticle($data, $title, $text)
{
    $newArticle = array(
        'id' => uniqid(),
        'title' => $title,
        'text' => $text
    );

    array_push($data['notes'], $newNote);
    $encodedData = json_encode($data);
    file_put_contents(UserDB, $encodedData);
}

function getItems($data)
{
    return $data['notes'];
}
?>