<?php
require("components/_articlesWrapper.php");
require "lib/_db.php";

if (isset($_POST['logout'])) {
    header('Location: logout.php');
}

session_start();
if ($uid = isset($_SESSION['uid']) ? $_SESSION['uid'] : NULL) {
    $user = getUserByUid($uid);
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
            <p>
                Please, turn on JavaScript.
            </p>
        </noscript>


        <form action="" method="post">
            <fieldset>
                <legend>Profil</legend>
                <h2>
                    <?php
                    echo "{$user['fname']} {$user['lname']}";
                    ?>
                </h2>
                <p>
                    <button type="submit" name="logout" value="1">Odhlásit se</button>
                </p>
            </fieldset>
        </form>


        <form class="newArtilce" action="" method="post">
            <fieldset>
                <legend>Nový článek</legend>
                <p>
                    <label>
                        Název:
                        <input type="text" name="title" placeholder="Title">
                    </label>
                </p>
                <p>
                    <label>
                        Text:
                        <!-- <input type="text" placeholder="Text"> -->
                    </label>
                </p>
                <p>
                    <textarea name="text" placeholder="Text">
                    </textarea>
                </p>
                <p>
                    <button type="submit">Publikovat</button>
                </p>
            </fieldset>
        </form>

        <?php
        articlesWrapper(getArticlesByUid($user["uid"]));
        ?>
    </main>

</body>

</html>