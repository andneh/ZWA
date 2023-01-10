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
        "username" => strtolower($username),
        "fname" => ucwords($fname),
        "lname" => ucwords($lname),
        "hash" => $hash,
    );
}