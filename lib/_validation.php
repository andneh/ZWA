<?php
// errors codes
$errors = array(
    "empty" => " nesmí být prázdné.",
    "uniq" => " již obsazeno, zkuste to znovu.",
    "short4" => " musí být delší než 4 znaky.",
    "short8" => " musí být delší než 8 znaky.",
    "long" => " je příliš dlouhý.",
    "same" => " musí být stejné.",
);

// validation module which includes other dependences
require("validation/_article.php");
require("validation/_login.php");
require("validation/_registration.php");