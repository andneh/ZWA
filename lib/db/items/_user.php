<?php
function user(
    $uid,
    $username,
    $fname,
    $lname,
    $hash
)
{
    // Creating one user unit function with hash and real time data
    return array(
        "uid" => $uid,
        "username" => htmlspecialchars(strtolower($username)),
        "fname" => htmlspecialchars(ucwords($fname)),
        "lname" => htmlspecialchars(ucwords($lname)),
        "hash" => $hash,
    );
}