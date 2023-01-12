<?php

$errors = array(
    "empty" => " nesmí být prázdné.",
    "uniq" => " již obsazeno, zkuste to znovu.",
    "short4" => " musí být delší než 4 znaky.",
    "short8" => " musí být delší než 8 znaky.",
    "long" => " je příliš dlouhý.",
    "same" => " musí být stejné.",
);

function validateUserName($value)
{
    // function to validating username 
    global $errors;
    $item = "Jméno uživatele";

    switch (false) {

        case $value:
            // check not empty
            return $item . $errors["empty"];

        case !getUserByUsername($value):
            // check uniq
            return $item . $errors["uniq"];

        case strlen($value) >= 4:
            // check min length
            return $item . $errors["short4"];

        case strlen($value) <= 20:
            // check max length
            return $item . $errors["long"];
    }
}

function validateFName($value)
{
    // function to validate first name
    global $errors;
    $item = "Jméno";

    switch (false) {

        case $value:
            // check not empty
            return $item . $errors["empty"];

        case strlen($value) >= 4:
            // check min length
            return $item . $errors["short4"];

        case strlen($value) <= 20:
            // check max length
            return $item . $errors["long"];
    }
}

function validateLName($value)
{
    // function to validate last name
    global $errors;
    $item = "Příjmení";

    switch (false) {

        case $value:
            // check not empty
            return $item . $errors["empty"];

        case strlen($value) >= 4:
            // check min length
            return $item . $errors["short4"];

        case strlen($value) <= 20:
            // check max length
            return $item . $errors["long"];
    }
}

function validatePassword($value, $password2)
{
    // function to validate password
    global $errors;
    $item = "Heslo";

    switch (false) {

        case $value:
            // check not empty
            return $item . $errors["empty"];

        case strlen($value) >= 8:
            // check min length
            return $item . $errors["short8"];

        case (preg_match('/[A-Z]/i', $value) or preg_match('/[a-z]/i', $value) or preg_match('/[0-9]/i', $value)):
            // check fi
            return $item . " musí obsahovat velká písmena, písmena a čísla.";

        case $value == $password2:
            // check passwords same
            return $item . $errors["same"];
    }
}

function validateUser(
    $username,
    $fname,
    $lname,
    $password1,
    $password2
)
{
    // function to validate user

    switch (true) {
        case $error = validateUserName($username):
            return $error;

        case $error = validateFName($fname):
            return $error;

        case $error = validateLName($lname):
            return $error;

        case $error = validatePassword($password1, $password2):
            return $error;
    }
}