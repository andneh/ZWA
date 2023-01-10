<?php
require("items/_article.php");
require("items/_user.php");
// require user and article units constructors
define('DB', 'db/db.json');
// defining DB const name

function saveDB($data)
{
    // function for saving DB which need data array with all database in it
    file_put_contents(DB, json_encode($data));
}


function loadDB()
{
    // function of loading db all data into one array with name data
    $json = file_get_contents(DB);
    if ($json == NULL) {
        // check if database exist
        $uid = "63bcb8a45cccb";
        $aid = "63bde26358d8f";
        $data = array(
            "users" => array($uid => user($uid, "andrew", "Andrii", "Nehalchuk", '$2y$10$eea7OdAjEQyq5myXLpCA2ewngG2y91G.BBYtCPp.CgTEoFt79UXsi')),
            "articles" => array(
                $aid => article($aid, $uid, "O projektu", "Za vzdělávacím projektem \"Nezávislé publikování\" stojí myšlenka článku bez cenzury a beze změn. Všem
                článkům je při zveřejnění přiřazen jedinečný hash na základě názvu, textu, data a jedinečného čísla
                článku, takže při změně článku nebo změně textu se hash nebude shodovat s původním. Pište o tom, co
                chcete vyprávět, ale přemýšlejte o tom. 😉")
            )
        );
        saveDB($data);
        return ($data);
    }
    return json_decode($json, JSON_OBJECT_AS_ARRAY);
}