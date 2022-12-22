<?php
require('_users.php');

function validateUserName($username)
{
    switch (false) {
        case $username:
            $error = "Username ne ma byt prazny";
            return false;


        case !getUserByUsername($username):
            $error = "Zkuste jiny username";
            return false;

        case strlen($username) >= 4:
            $error = "username ma byt vic nez 4";
            return false;
    }

    return true;
}


function validateFName($fname)
{
    switch (false) {
        case $fname:
            $error = "Jmeno ne ma byt prazne";
            return false;

        case strlen($fname) >= 4:
            $error = "jmeno ma byt vic nez 4";
            return false;
    }

    return true;
}

function validateLName($lname)
{
    switch (false) {
        case $lname:
            $error = "Prinjmeni ne ma byt prazne";
            return false;

        case strlen($lname) >= 4:
            $error = "prijmeni ma byt vic nez 4";
            return false;
    }

    return true;
}

function validatePassword($password1, $password2)
{
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
?>