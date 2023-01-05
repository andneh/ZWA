<?php
define("SALT", "tlas");
// Creating one user unit function with hash and real time data
function user(
    $username,
    $fname,
    $lname,
    $password,
) {
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
