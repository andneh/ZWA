<?php
function user(
    $uid,
    $username,
    $fname,
    $lname,
    $password
) {
    // Creating one user unit function with hash and real time data
    return array(
        "uid" => $uid,
        "username" => strtolower($username),
        "fname" => ucwords($fname),
        "lname" => ucwords($lname),
        "hash" => password_hash(
            $username . $password .
                $uid,
            PASSWORD_DEFAULT
        )
    );
}
