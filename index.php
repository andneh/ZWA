<?php
require("lib/_db.php");
?>

<!DOCTYPE html>
<html lang="cs">
<?php
include "components/_head.php";
?>

<body class="root">

    <?php
    include "components/_header.php";
    ?>

    <main>
        <noscript>
            <p class="error">
                Please, turn on JavaScript.
            </p>
        </noscript>

        <?php
        // TODO function post parameters of sorting
        $articles = getArticles();
        $btnAct = "like";
        $btnNm = "líbí se mi";
        $sorting = "";
        // get all articles from database and wrapping it
        include("components/_articlesWrapper.php");
        ?>

    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>