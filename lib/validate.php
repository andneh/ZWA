<?php
// funkce validujici jmeno
require('./_users.php');

function validateUserName($username)
{
    if (!getUserByUsername($username)) {
        if (strtr($username) >= 4) {
            return true;
        }
        $error = "username ma byt vic nez 4";
        return false;
    }

    $error = "skuste jine jmeno";
    return false;
}
function validateFName($fname)
{
    if (strlen($fname) >= 3) {
        return true;
    }
    $error = "jmeno ma byt vic nez 3";
    return false;
}

function validateLName($lname)
{
    return strlen($lname) >= 3;
}

// funkce validujici email
function validatePassword($email)
{
    return strpos($email, '@') ? true : false;
}
?>