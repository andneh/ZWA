<div class="articleWrapper">

    <form action="" method="post" id="pages" class="filter">
        <?php
        // check if filter is set
        if (isset($_POST['filter'])) {
            require("lib/_sortArticles.php");
            switch ($_POST['filter']) {
                case "date":
                    usort($articles, "sortArticlesByDate");
                    $dateFilter = true;
                    break;
                case "title":
                    usort($articles, "sortArticlesByTitle");
                    $titleFilter = true;
                    break;
                case "author":
                    usort($articles, "sortArticlesByUid");
                    $authorFilter = true;
                    break;
            }
        }
        ?>
        <fieldset class="">
            <legend>
                Filtr
            </legend>
            <p>
                <label for="cars">Třídit podle:</label>
                <select name="filter">
                    <option value="date" <?php echo (isset($dateFilter) ? "selected" : ''); ?>>datumu</option>
                    <option value="title" <?php echo (isset($titleFilter) ? "selected" : ''); ?>>názvu</option>
                    <option value="author" <?php echo (isset($authorFilter) ? "selected" : ''); ?>>autora</option>
                </select>
            </p>
            <p>
                <button type="submit">
                    Zobrazit
                </button>
            </p>
        </fieldset>
    </form>

    <?php
    // $articles;
    // $btnAct;
    // $btnNm;
    if (isset($articles) and isset($btnAct) and isset($btnNm)) {



        // check if page is set
        if (isset($_POST['page'])) {
            $key_number = $_POST['page'];
        } else {
            $key_number = 0;
        }

        $articles_keys = array_keys($articles);
        $numOfArticles = count($articles_keys);
        $articles_page = array();

        // make pages from all articles keys
        switch (true) {
            case ($numOfArticles < 10):
                $page_keys = $articles_keys;
                break;
            case ($numOfArticles < ($key_number + 10)):
                $page_keys = array_slice($articles_keys, $key_number);
                break;
            case ($numOfArticles >= ($key_number + 10)):
                $page_keys = array_slice($articles_keys, $key_number, 10);
                break;
        }

        // make article pages from page keys 
        foreach ($page_keys as $key) {
            array_push($articles_page, $articles[$key]);
        }


        // create articles
        foreach ($articles_page as $article) {
            $user = getUserByUid($article["uid"]);
            $autor = $user["fname"] . " " . $user["lname"];
            $title = $article["title"];
            $text = $article["text"];
            echo "<article>";
            echo "<form action=\"\" method=\"post\">";
            echo "<fieldset>";
            echo "<legend><abbr title=\"ID {$article["aid"]} MD5 HASH {$article["hash"]}\">{$article["date"]}</abbr> {$autor}</legend>";
            echo "<h2>{$title}</h2>";
            echo "<p>{$text}</p>";
            echo "<p><button type=\"submit\" name=\"{$btnAct}\" value=\"{$article["aid"]}\">{$btnNm}</button></p>";
            echo "</fieldset>";
            echo "</form>";
            echo "</article>";
        }

        // prepare numbers for pagination
        $page = ($key_number / 10) + 1;
        $pages = (($numOfArticles - ($numOfArticles % 10)) / 10) + 1;

    } else {
        echo "<p>No Articles.</p>";
        $page = 1;
        $pages = 1;
    }
    ?>
</div>

<fieldset>
    <legend>
        Page <?php echo "$page / $pages"; ?>
    </legend>
    <div class="paginationWrapper">
        <div class="pagination">

            <?php
            // pagination
            for ($page = 1; $page < ($pages + 1); $page++) {
                $key_number = ($page - 1) * 10;
                echo "<button type=\"submit\" name=\"page\" value=\"{$key_number}\" form=\"pages\">{$page}</button>";
            }
            ?>
        </div>
    </div>

</fieldset>