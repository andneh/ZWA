<?php
function articlesWrapper($articles)
{
    echo "<div class=\"articleWrapper\">";

    // TODO sort by date
    foreach ($articles as $article) {
        $autor = getUserByUid($article["uid"]);
        echo "
        <article>
            <form>
                <fieldset>
                    <legend>
                        {$autor["fname"]} {$autor["lname"]}
                    </legend>
                    <h2>
                        {$article["title"]}
                    </h2>
                    <div class=\"info\">
                        <h6>
                            {$article["date"]} 
                        </h6>
                        <p class=\"spacer\"></p>
                        <h6>
                            {$article["prevhash"]}
                        </h6>
                    </div>
                    <p>
                        {$article["text"]}
                    </p>
                </fieldset>
            </form>
        </article>
        ";
    }
    echo "</div>";
}
