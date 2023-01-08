<?php

require "lib/_db.php";
require 'lib/validation/_user.php';

if (isset($_POST['login'])) {
    // login page
    header('Location: login.php');
}

if (isset($_POST['registration'])) {
    // registration process
    $error = validateUser(
        // validate normalized input
        $username = strtolower(str_replace(' ', '', $_POST['username'])),
        $fname = ucfirst(strtolower(str_replace(' ', '', $_POST['fname']))),
        $lname = ucfirst(strtolower(str_replace(' ', '', $_POST['lname']))),
        $password1 = $_POST['password1'],
        $password2 = $_POST['password2'],
    );
    $birthday = $_POST['birthday'];
    $email = strtolower(str_replace(' ', '', $_POST['email']));

    if ($error == false) {
        // check errors
        addUser(
            $username,
            $fname,
            $lname,
            $password1
        );
        $user = getUserByUsername($username);
        // create user
        session_start();
        $_SESSION['uid'] = $user['uid'];
        // auto login
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
                    echo "<p class=\"error\">$error</p>";
                }
                ?>
                <p>
                    <label>
                        Jméno uživatele:
                    </label>
                    <br />
                    <input type="text" minlength="4" maxlength="20" required value="<?= isset($username) ? $username : '' ?>" name="username">
                </p>
                <p>
                    <label>
                        Jméno:
                    </label>
                    <br />
                    <input type="text" minlength="4" maxlength="20" required value="<?= isset($fname) ? $fname : '' ?>" name="fname">
                </p>
                <p>
                    <label>
                        Příjmení:
                    </label>
                    <br />
                    <input type="text" minlength="4" maxlength="20" required value="<?= isset($lname) ? $lname : '' ?>" name="lname">
                </p>
                <p>
                    <label>
                        Datum narození:
                    </label>
                    <br />
                    <input type="date" value="<?= isset($birthday) ? $birthday : '' ?>" name="birthday">
                </p>
                <p>
                    <label>
                        E-mail:
                    </label>
                    <br />
                    <input type="email" value="<?= isset($email) ? $email : '' ?>" name="email">
                </p>
                <p>
                    <label>
                        Heslo:
                    </label>
                    <br />
                    <input type="password" minlength="8" required name="password1">
                </p>
                <p>
                    <label>
                        Zopakujte heslo:
                    </label>
                    <br />
                    <input type="password" minlength="8" required name="password2">
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