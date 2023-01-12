<?php
function articlesWrapper($articles, $btnAct, $btnNm)
{
    echo "<div class=\"articleWrapper\">";
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
    echo "</div>";
}