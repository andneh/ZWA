<?php
function article(
    $aid,
    $uid,
    $title,
    $text
) {
    $date = date("d.m.Y");
    // Creating one article unit function with hash and real time data
    return array(
        "aid" => $aid,
        "uid" => $uid,
        "title" => $title,
        "text" => $text,
        "date" => $date,
        "hash" => hash(
            "md5",
            $aid . $uid . $title . $text . $date
        ),
    );
}
