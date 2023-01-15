<?php
require("lib/_db.php");
?>

<!DOCTYPE html>
<html lang="cs">
<?php
require "components/_head.php";
?>

<body class="root">

    <?php
    require "components/_header.php";
    ?>

    <main>
        <noscript>
            <p class="error">
                Please, turn on JavaScript.
            </p>
        </noscript>

        <?php
        $articles = getArticles();
        $btnAct = "like";
        $btnNm = "líbí se mi";
        // get all articles from database and wrapping it
        require("components/_articlesWrapper.php");
        ?>

    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>