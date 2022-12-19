<?php

function article(
    $uid,
    $title,
    $text,
    $hash
)
{
    return array(
        "aid" => uniqid(),
        "uid" => $uid,
        "title" => $title,
        "text" => $text,
        "date" => date('jS \of F Y'),
        "prevhash" => $hash,
    );
}

?>