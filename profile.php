<?php
require("components/_articlesWrapper.php");
require "lib/_db.php";
require "lib/validation/_article.php";

if (isset($_POST['logout'])) {
    // logout
    header('Location: logout.php');
}

session_start();
if ($uid = isset($_SESSION['uid']) ? $_SESSION['uid'] : NULL) {
    // check user login
    $user = getUserByUid($uid);

    if (isset($_POST["article"])) {
        // new article
        $error = validateArticle(
            // validate article
            $title = preg_replace('!\s+!', ' ', $_POST["title"]),
            $text = preg_replace('!\s+!', ' ', $_POST["text"]),
        );
        if ($error == false) {
            // check errors
            addArticle($user["uid"], $title, $text);
            // create article
            header('Location: profile.php');
        }
    }

    if (isset($_POST["delete"])) {
        // delete article
        $aid = $_POST["delete"];
        if ($user["uid"] == getArticleByAid($aid)["uid"]) {
            // check if owner delete article
            deleteArticle($aid);
            // delete
            header('Location: profile.php');
        }
    }
} else {
    header('Location: login.php');
}

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
        <noscript>
            <p class="error">
                Please, turn on JavaScript.
            </p>
        </noscript>


        <form action="" method="post">
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


        <form class="newArticle" action="" method="post">
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
                        placeholder="Podělte se o své myšlenky...">
                        <?= isset($text) ? $text : '' ?>
                    </textarea>
                </p>
                <p>
                    <button type="submit" name="article">Publikovat</button>
                </p>
            </fieldset>
        </form>

        <?php
        articlesWrapper(getArticlesByUid($user["uid"]), "delete", "Smazat");
        ?>
    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>