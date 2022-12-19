<?php

function user(
    $login,
    $fname,
    $lname,
    $password,
) {
    return array(
        "uid" => uniqid(),
        "username" => $login,
        "fname" => $fname,
        "lname" => $lname,
        "passhash" => password_hash("{$password}sull", PASSWORD_DEFAULT)
    );
}

?>