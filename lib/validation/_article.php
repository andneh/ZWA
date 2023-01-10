<?php
$errors = array(
    "empty" => " nesmí být prázdné.",
    "uniq" => " již obsazeno, zkuste to znovu.",
    "short4" => " musí být delší než 4 znaky.",
    "short8" => " musí být delší než 8 znaky.",
    "long" => " je příliš dlouhý.",
    "same" => " musí být stejné.",
);

function validateTitle($value)
{
    // function to validate title
    global $errors;
    $item = "Název";

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
function validateText($value)
{
    // function to validate text
    global $errors;
    $item = "Text";

    switch (false) {

        case $value:
            // check not empty
            return $item . $errors["empty"];

        case strlen($value) >= 4:
            // check min length
            return $item . $errors["short4"];

        case strlen($value) <= 500:
            // check max length
            return $item . $errors["long"];
    }
}


function validateArticle($title, $text)
{
    // function to validate article

    switch (true) {

        case $error = validateTitle($title):
            return $error;


        case $error = validateText($text):
            return $error;
    }
}