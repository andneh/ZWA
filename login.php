<?php
require "lib/_db.php";
require "lib/_validation.php";

// registration button
if (isset($_POST['registration'])) {
    header('Location: registration.php');
}

// login process
if (isset($_POST['login'])) {
    $error = validateLogin(
        $username = strtolower(str_replace(' ', '', $_POST['username'])),
        $_POST['password']
    );

    // check errors
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

        <form action="login.php" id="registration" method="post">
        </form>
        <form id="login" action="login.php" method="post">
            <fieldset>
                <legend>Autorizace</legend>
                <?php
                if (isset($error)) {
                    echo "<p class=\"error\">$error</p>";
                }
                ?>
                <p class="error hidden"></p>
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