<div class="articleWrapper">


    <form action="" method="post" class="filter">
        <p>

            <label for="cars">Třídit podle:</label>

            <select name="filter">
                <option value="date">Datumu</option>
                <option value="title">Názvu</option>
                <option value="author">Autora</option>
            </select>
        </p>
        <p>
            <input type="submit" value="filter" name="search">
        </p>
    </form>


    <?php
    require("lib/_sortArticles.php");
    // $articles;
    // $btnAct;
    // $btnNm;
    
    if (isset($articles)) {
        echo "filer";
        if (isset($_POST['filter'])) {
            echo $_POST['filter'];
            switch ($_POST['filter']) {
                case "date":
                    echo "date";
                    usort($articles, "sortArticlesByDate");
                    break;
                case "title":
                    echo "title";
                    usort($articles, "sortArticlesByTitle");
                    break;
                case "author":
                    echo "author";
                    usort($articles, "sortArticlesByUid");
                    break;
            }
        }
        foreach ($articles as $article) {
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