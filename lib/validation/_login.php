<?php
function validateLogin(
    $username,
    $password
)
{

    $error = "Uživatelské jméno nebo heslo byly zadány nesprávně";

    switch (false) {
        case $username:
            return "ne ma byt empty";

        case $password:
            return "ne ma byt empty";

        case $user = getUserByUsername($username):
            return $error;

        case password_verify($user["username"] . $password . $user["uid"], $user['hash']):
            return $error;
    }
}