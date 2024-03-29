<?php

// logout
if (isset($_POST['logout'])) {
    header('Location: logout.php');
}

session_start();
// check user login
if ($uid = isset($_SESSION['uid']) ? $_SESSION['uid'] : NULL) {

    require "lib/_db.php";
    require "lib/_validation.php";

    $user = getUserByUid($uid);

    // new article
    if (isset($_POST["article"])) {
        // validate article
        $error = validateArticle(
            $title = preg_replace('!\s+!', ' ', $_POST["title"]),
            $text = preg_replace('!\s+!', ' ', $_POST["text"]),
        );
        // check errors
        if ($error == false) {
            // create article
            addArticle($user["uid"], $title, $text);
            header('Location: profile.php');
        }
    }

    // delete article
    if (isset($_POST["delete"])) {
        $aid = $_POST["delete"];
        // check if owner deletes the article
        if ($user["uid"] == getArticleByAid($aid)["uid"]) {
            // delete
            deleteArticle($aid);
            header('Location: profile.php');
        }
    }
} else {
    // no login
    header('Location: login.php');
}

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


        <form action="profile.php" method="post">
            <fieldset>
                <legend>Profil</legend>
                <h1>
                    <?php
                    echo "{$user['fname']} {$user['lname']}";
                    ?>
                </h1>
                <p>
                    <button type="submit" name="logout" value="1">Odhlásit se</button>
                </p>
            </fieldset>
        </form>


        <form class="newArticle" action="profile.php" method="post">
            <fieldset>
                <legend>Nový článek</legend>
                <?php
                if (isset($error)) {
                    echo "<p class=\"error\">$error</p>";
                }
                ?>
                <p class="error hidden"></p>
                <p>
                    <label>
                        Název:
                    </label>
                    <br>
                    <input type="text" required minlength="4" maxlength="20" name="title"
                        value="<?= isset($title) ? $title : '' ?>" placeholder="Uveďte název">
                </p>
                <p>
                    <label>
                        Text:
                    </label>
                    <br>
                    <textarea name="text" required minlength="4" maxlength="1000"
                        placeholder="Podělte se o své myšlenky..."><?= isset($text) ? $text : '' ?></textarea>
                </p>
                <p>
                    <button type="submit" name="article">Publikovat</button>
                </p>
            </fieldset>
        </form>

        <?php
        $articles = getArticlesByUid($user["uid"]);
        $btnAct = "delete";
        $btnNm = "Smazat";

        // get all articles from database and wrapping it
        ?>
        <?php
        require "components/_articlesWrapper.php";
        ?>


    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>