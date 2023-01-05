<?php
define("SALT", "tlas");
function user(
    $username,
    $fname,
    $lname,
    $password,
) {
    // Creating one user unit function with hash and real time data
    return array(
        "uid" => uniqid(),
        "username" => $username,
        "fname" => $fname,
        "lname" => $lname,
        "passhash" => password_hash(
            $password . SALT,
            PASSWORD_DEFAULT
        )
    );
}
