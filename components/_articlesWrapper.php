<?php
function articlesWrapper($articles, $btnAct, $btnNm)
{
    echo "<div class=\"articleWrapper\">";

    // TODO sort by date
    foreach ($articles as $article) {
        $autor = getUserByUid($article["uid"]);
        echo "
        <article>
            <form action=\"\" method=\"post\">
                <fieldset>
                    <legend>
                    <abbr title=\"MD5 HASH #{$article["hash"]}\">{$article["date"]}</abbr>
                    {$autor["fname"]} {$autor["lname"]}
                    </legend>
                    <h2>
                        {$article["title"]}
                    </h2>
                    <p>
                        {$article["text"]}
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