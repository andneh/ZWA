<?php
require("lib/_articles.php");
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

        <?php
        foreach (getArticles() as $article) {
            echo "
            <article>
                <h2>{$article["title"]}</h2>
                <h3>{$article["uid"]}</h3>
                <p>{$article["text"]}</p>
            </article>
            ";
        }
        ?>

    </main>

</body>

</html>