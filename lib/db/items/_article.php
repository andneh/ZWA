<?php
function article(
    $uid,
    $title,
    $text,
    $hash
) {
    // Creating one article unit function with hash and real time data
    // TODO ARRAY HASHS
    return array(
        "aid" => uniqid(),
        "uid" => $uid,
        "title" => $title,
        "text" => $text,
        "date" => date('jS \of F Y'),
        "prevhash" => $hash,
    );
}
