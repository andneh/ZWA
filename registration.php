<?php

require "lib/_db.php";
require 'lib/_validate.php';

if (isset($_POST['login'])) {
    header('Location: login.php');
}








//TODO testing on password
// TODO testing login
// TODO add user
// TODO auto login
// TODO input normalization


if (isset($_POST['registration'])) {
    switch (true) {
        case $error = validateUserName($_POST['username']):
            break;

        case $error = validateFName($_POST['fname']):
            break;

        case $error = validateLName($_POST['lname']):
            break;

        case $error = validatePassword($_POST['password1'], $_POST['password2']):
            break;
    }

    if ($error == false) {
        addUser(
            $_POST['username'],
            $_POST['fname'],
            $_POST['lname'],
            $_POST['password1']
        );
        $user = getUserByUsername($_POST['username']);
        session_start();
        $_SESSION['uid'] = $user['uid'];
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

        <form action="" method="post">
            <fieldset>
                <legend>Registrace</legend>
                <?php
                if (isset($error)) {
                    echo "<p style=\"color:red;\">$error</p>";
                }
                ?>
                <p>
                    <label>
                        Jméno uživatele:
                        <br />
                        <input type="text" minlength="4" maxlength="20" value="<?= isset($_POST['username']) ? $_POST['username'] : '' ?>" name="username">
                    </label>
                </p>
                <p>
                    <label>
                        Jméno:
                        <br />
                        <input type="text" minlength="4" maxlength="20" value="<?= isset($_POST['fname']) ? $_POST['fname'] : '' ?>" name="fname">
                    </label>
                </p>
                <p>
                    <label>
                        Příjmení:
                        <br />
                        <input type="text" minlength="4" maxlength="20" value="<?= isset($_POST['lname']) ? $_POST['lname'] : '' ?>" name="lname">
                    </label>
                </p>
                <p>
                    <label>
                        Datum narození:
                        <br />
                        <input type="date" value="<?= isset($_POST['birthday']) ? $_POST['birthday'] : '' ?>" name="birthday">
                    </label>
                </p>
                <p>
                    <label>
                        E-mail:
                        <br />
                        <input type="email" value="<?= isset($_POST['email']) ? $_POST['email'] : '' ?>" name="email">
                    </label>
                </p>
                <p>
                    <label>
                        Heslo:
                        <br />
                        <input type="password" minlength="8" name="password1">
                    </label>
                </p>
                <p>
                    <label>
                        Zopakujte heslo:
                        <br />
                        <input type="password" minlength="8" name="password2">
                    </label>
                </p>
                <p>
                    <button type="submit" name="registration" value="1">Registrace</button>
                </p>
                <p>
                    <button type="submit" name="login" value="1">Přihlášení</button>
                </p>
            </fieldset>
        </form>


    </main>

</body>

</html>