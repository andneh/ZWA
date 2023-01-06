<?php
require("lib/db/_db.php");
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
        // get all articles and iterate it with constructing the articles
        foreach (getArticles() as $article) {
            $autor = getUserByUid($article["uid"]);
            echo "
            <article>
            <h2>{$article["title"]}</h2>
                <div class='info'>
                    <h3>{$autor["fname"]} {$autor["lname"]}</h3>
                    <h3>{$article["prevhash"]}</h3>
                    <h3>{$article["date"]}</h3>
                </div>
                <p>{$article["text"]}</p>
            </article>
            ";
        }
        ?>

    </main>

</body>

</html>