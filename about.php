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
            <p>
                Please, turn on JavaScript.
            </p>
        </noscript>

        <?php
        require("components/_articlesWrapper.php");
        require("lib/_db.php");
        articlesWrapper(array(getArticleByAid("63bde26358d8f")), "like", "líbí se mi");
        ?>

    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>