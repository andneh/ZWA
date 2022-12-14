<?php
function createArticle(
    $uid,
    $title,
    $text,
) {
    return array(
        "aid" => uniqid(),
        "uid" => $uid,
        "title" => $title,
        "text" => $text,
        "date" => date('jS \of F Y'),
        "prevhash" => "HASH",
    );
}

?>