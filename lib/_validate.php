<?php
include('_users.php');

function validateUserName($username)
{
    // function to validating user name 
    switch (false) {
        case $username:
            // check if is not empty string
            $error = "Username ne ma byt prazny";
            return false;

        case !getUserByUsername($username):
            // check if this user exists
            $error = "Zkuste jiny username";
            return false;

        case strlen($username) >= 4:
            // check username length
            $error = "username ma byt vic nez 4";
            return false;
    }

    return true;
}

function validateFName($fname)
{
    // function to validate first name
    switch (false) {
        case $fname:
            // check if string is not empty
            $error = "Jmeno ne ma byt prazne";
            return false;

        case strlen($fname) >= 4:
            // check first name length
            $error = "jmeno ma byt vic nez 4";
            return false;
    }

    return true;
}

function validateLName($lname)
{
    // check user last name
    switch (false) {
        case $lname:
            // check if name if not empty
            $error = "Prinjmeni ne ma byt prazne";
            return false;

        case strlen($lname) >= 4:
            // check last name length
            $error = "prijmeni ma byt vic nez 4";
            return false;
    }

    return true;
}
// TODO VALIDATE ERRORS
function validatePassword($password1, $password2)
{
    // function to validate password
    switch (false) {
        case $password1:
            $error = "Heslo ne ma byt prazne";
            return false;

        case strlen($password1) >= 8:
            $error = "heslo ma byt vic nez 8";
            return false;

        case $password1 == $password2:
            $error = "hesla ma byt stejne";
            return false;
    }
    return true;
}
