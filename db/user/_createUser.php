<?php
define("passSUL", "sull");

function createUser(
    $login,
    $fname,
    $lname,
    $password,
) {
    return array(
        "uid" => uniqid(),
        "login" => $login,
        "fname" => $fname,
        "lname" => $lname,
        "passhash" => password_hash($password, passSUL),
    );
}

?>