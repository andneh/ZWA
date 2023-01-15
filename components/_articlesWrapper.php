<div class="articleWrapper">


    <form action="" method="post" class="filter">
        <fieldset>
            <legend>
                Filtr
            </legend>
            <p>
                <label for="cars">Třídit podle:</label>
                <select name="filter">
                    <option value="date">Datumu</option>
                    <option value="title">Názvu</option>
                    <option value="author">Autora</option>
                </select>
            </p>
            <p>
                <button type="submit">
                    Zobrazit
                </button>
            </p>
            <p>

            </p>
        </fieldset>
    </form>


    <?php
    // require("lib/_sortArticles.php");
    // // $articles;
    // // $btnAct;
    // // $btnNm;
    
    if (isset($articles)) {

        //     if (isset($_POST['filter'])) {
    
        //         switch ($_POST['filter']) {
        //             case "date":
    
        //                 usort($articles, "sortArticlesByDate");
        //                 break;
        //             case "title":
    
        //                 usort($articles, "sortArticlesByTitle");
        //                 break;
        //             case "author":
    
        //                 usort($articles, "sortArticlesByUid");
        //                 break;
        //         }
        //     }
    
        if (isset($_POST['page'])) {
            $page = $_POST['page'];
        } else {
            $page = 0;
        }



        $articles_keys = array_keys($articles);



        $numOfArticles = count($articles);
        switch ($true) {
            case $numOfArticles < 10:
                $page_keys = $articles_keys;
                break;

            case $numOfArticles >= $page + 10:
                $page_keys = array_slice($articles_keys, $page, 10);
                break;

            case $numOfArticles < $page + 10:
                $page_keys = array_slice($articles_keys, $page);
                break;
        }

        $articles_page = array();

        foreach ($page_keys as $key) {
            echo $key;
            array_push($articles_page, $articles[$key]);
        }


        foreach ($articles_page as $article) {
            $user = getUserByUid($article["uid"]);
            $autor = $user["fname"] . " " . $user["lname"];
            $title = $article["title"];
            $text = $article["text"];
            echo "
            <article>
                <form action=\"\" method=\"post\">
                    <fieldset>
                        <legend>
                        <abbr title=\"ID {$article["aid"]} MD5 HASH {$article["hash"]}\">{$article["date"]}</abbr>
                        {$autor}
                        </legend>
                        <h2>
                            {$title}
                        </h2>
                        <p>
                            {$text}
                        </p>
                        <p>
                            <button type=\"submit\" name=\"{$btnAct}\" value=\"{$article["aid"]}\">{$btnNm}</button>
                        </p>
                    </fieldset>
                </form>
            </article>
            ";
        }
    } else {
        echo "
        <p>No Articles.</p>
        ";
    }


    // TODO PAGINATION
    ?>
</div>

<form action="" method="post">
    <fieldset>
        <legend>
            Pages
        </legend>
        <p>
            <?php
            $pages = count($articles) / 10;
            for ($i = 1; $i != $pages; $i++) {
                echo "<p>";
                echo "<input type=\"submit\" name=\"page\" value={$i} >";
                echo "</p>";
            }
            ?>
        </p>
        <?php
        echo "<p>{$page}/{$pages}</p>";
        ?>
    </fieldset>
</form>