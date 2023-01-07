<?php

$errors = array(
    "empty" => " nesmí být prázdné.",
    "uniq" => " již obsazeno, zkuste to znovu.",
    "short4" => " musí být delší než 4 znaky.",
    "short8" => " musí být delší než 8 znaky.",
    "long" => " je příliš dlouhý",
    "same" => " musí být stejné.",
);

$hui = "q2e";

function validateUserName($username)
{
    global $errors;
    $unit = "Jméno uživatele";
    // function to validating user name 
    switch (false) {
        case $username:
            // check if is not empty string
            return  $unit . $errors["empty"];

        case !getUserByUsername($username):
            // check if this user exists
            return $unit . $errors["uniq"];

        case strlen($username) >= 4:
            // check username length
            return $unit . $errors["short4"];

        case strlen($username) <= 20:
            // check username length
            return $unit . $errors["long"];

        default:
            // return 's';
    }
}

function validateFName($fname)
{
    global $errors;
    $unit = "Jméno";
    // function to validate first name
    switch (false) {
        case $fname:
            // check if string is not empty
            return $unit . $errors["empty"];

        case strlen($fname) >= 4:
            // check first name length
            return $unit . $errors["short4"];

        case strlen($fname) <= 20:
            // check username length
            return $unit . $errors["long"];

        default:
            // return 's';
    }
}

function validateLName($lname)
{
    global $errors;
    $unit = "Příjmení";
    // check user last name
    switch (false) {
        case $lname:
            // check if name if not empty
            return $unit . $errors["empty"];

        case strlen($lname) >= 4:
            // check last name length
            return $unit . $errors["short4"];

        case strlen($lname) <= 20:
            // check username length
            return $unit . $errors["long"];

        default:
            // return 's';
    }
}
// TODO VALIDATE ERRORS
function validatePassword($password1, $password2)
{
    global $errors;
    $unit = "Heslo";
    // function to validate password
    switch (false) {
        case $password1:
            // check if password empty
            return $unit . $errors["empty"];

        case strlen($password1) >= 8:
            // check password length
            return $unit . $errors["short8"];


        case $password1 == $password2:
            // check password repeating
            return $unit . $errors["same"];
        default:
            // return 's';
    }
}
