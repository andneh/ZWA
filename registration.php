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


    $username = strtolower(str_replace(' ', '', $_POST['username']));
    $fname = ucfirst(strtolower(str_replace(' ', '', $_POST['fname'])));
    $lname = ucfirst(strtolower(str_replace(' ', '', $_POST['lname'])));
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];
    $birthday = $_POST['birthday'];
    $email = strtolower(str_replace(' ', '', $_POST['email']));




    switch (true) {
        case $error = validateUserName($username):
            break;

        case $error = validateFName($fname):
            break;

        case $error = validateLName($lname):
            break;

        case $error = validatePassword($password1, $password2):
            break;
    }

    if ($error == false) {
        addUser(
            $username,
            $fname,
            $lname,
            $password1
        );
        $user = getUserByUsername($username);
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

        <form action="" id="login" method="post">
        </form>
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
                        <input type="text" minlength="4" maxlength="20" required value="<?= isset($username) ? $username : '' ?>" name="username">
                    </label>
                </p>
                <p>
                    <label>
                        Jméno:
                        <br />
                        <input type="text" minlength="4" maxlength="20" required value="<?= isset($fname) ? $fname : '' ?>" name="fname">
                    </label>
                </p>
                <p>
                    <label>
                        Příjmení:
                        <br />
                        <input type="text" minlength="4" maxlength="20" required value="<?= isset($lname) ? $lname : '' ?>" name="lname">
                    </label>
                </p>
                <p>
                    <label>
                        Datum narození:
                        <br />
                        <input type="date" value="<?= isset($birthday) ? $birthday : '' ?>" name="birthday">
                    </label>
                </p>
                <p>
                    <label>
                        E-mail:
                        <br />
                        <input type="email" value="<?= isset($email) ? $email : '' ?>" name="email">
                    </label>
                </p>
                <p>
                    <label>
                        Heslo:
                        <br />
                        <input type="password" minlength="8" required name="password1">
                    </label>
                </p>
                <p>
                    <label>
                        Zopakujte heslo:
                        <br />
                        <input type="password" minlength="8" required name="password2">
                    </label>
                </p>
                <p>
                    <button type="submit" name="registration" value="1">Registrace</button>
                </p>
                <p>
                    <button form="login" type="submit" name="login" value="1">Přihlášení</button>
                </p>
            </fieldset>
        </form>


    </main>

</body>

</html>