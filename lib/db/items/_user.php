<?php
define("SALT", "tlas");
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
    // TODO PASSWORD SALT
}
