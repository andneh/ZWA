<?php
require "lib/_db.php";
require "lib/validation/_login.php";

if (isset($_POST['registration'])) {
    // registration button
    header('Location: registration.php');
}
if (isset($_POST['login'])) {

    // login process
    $error = validateLogin(
        $username = strtolower(str_replace(' ', '', $_POST['username'])),
        $_POST['password'],
    );

    if ($error == false) {
        session_start();
        $_SESSION['uid'] = getUserByUsername($username)["uid"];
        header('Location: profile.php');
    }
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

        <form action="" id="registration" method="post">
        </form>
        <form id="login" action="" method="post">
            <fieldset>
                <legend>Autorizace</legend>
                <?php
                if (isset($error)) {
                    echo "<p class=\"error\">$error</p>";
                }
                ?>
                <p>
                    <label>
                        Jméno uživatele:
                    </label>
                    <br>
                    <input type="text" minlength="4" maxlength="20" required
                        value="<?= isset($username) ? $username : '' ?>" name="username" placeholder="username">
                </p>
                <p>
                    <label>
                        Heslo:
                    </label>
                    <br>
                    <input minlength="8" type="password" required name="password" placeholder="password">
                </p>
                <p>
                    <button type="submit" name="login" value="1">Přihlásit se</button>
                </p>
                <p>
                    <button form="registration" type="submit" name="registration" value="1">Registrace</button>
                </p>
            </fieldset>
        </form>
    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>