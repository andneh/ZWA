<?php

require "lib/_db.php";
require "lib/_validation.php";

// login page
if (isset($_POST['login'])) {
    header('Location: login.php');
}

// registration process
if (isset($_POST['registration'])) {
    // validate normalized input
    $error = validateUser(
        $username = strtolower(str_replace(' ', '', $_POST['username'])),
        $fname = ucfirst(strtolower(str_replace(' ', '', $_POST['fname']))),
        $lname = ucfirst(strtolower(str_replace(' ', '', $_POST['lname']))),
        $password1 = $_POST['password1'],
        $password2 = $_POST['password2'],
    );
    $birthday = $_POST['birthday'];
    $email = strtolower(str_replace(' ', '', $_POST['email']));

    // check errors
    if ($error == false) {
        addUser(
            $username,
            $fname,
            $lname,
            $password1
        );
        // create user
        $user = getUserByUsername($username);
        session_start();
        // auto login
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
            <p class="error">
                Please, turn on JavaScript.
            </p>
        </noscript>

        <form action="" id="login" method="post">
        </form>
        <form action="" id="registration" method="post">
            <fieldset>
                <legend>Registrace</legend>
                <?php
                if (isset($error)) {
                    echo "<p class=\"error\">$error</p>";
                }
                ?>
                <p class="error hidden"></p>
                <p>
                    <label>
                        Jméno uživatele:
                        <br>
                        <input type="text" minlength="4" maxlength="20" required
                            value="<?= isset($username) ? $username : '' ?>" name="username" placeholder="username">
                    </label>
                </p>
                <p>
                    <label>
                        Jméno:
                    </label>
                    <br>
                    <input type="text" minlength="4" maxlength="20" required value="<?= isset($fname) ? $fname : '' ?>"
                        name="fname" placeholder="Jiří">
                </p>
                <p>
                    <label>
                        Příjmení:
                    </label>
                    <br>
                    <input type="text" minlength="4" maxlength="20" required value="<?= isset($lname) ? $lname : '' ?>"
                        name="lname" placeholder="Novák">
                </p>
                <p>
                    <label>
                        Datum narození:
                    </label>
                    <br>
                    <input type="date" value="<?= isset($birthday) ? $birthday : '' ?>" name="birthday"
                        max="<?date('Y-m-d', strtotime('-18 year'))?>" required>
                </p>
                <p>
                    <label>
                        E-mail:
                    </label>
                    <br>
                    <input type="email" value="<?= isset($email) ? $email : '' ?>" name="email"
                        placeholder="email@example.com">
                </p>
                <p>
                    <label>
                        Heslo:
                    </label>
                    <br>
                    <input type="password" minlength="8" required name="password1" placeholder="password">
                </p>
                <p>
                    <label>
                        Zopakujte heslo:
                    </label>
                    <br>
                    <input type="password" minlength="8" required name="password2" placeholder="password">
                </p>
                <p>
                    <button type="submit" name="" value="">Registrace</button>
                </p>
                <p>
                    <button form="login" type="submit" name="login" value="1">Přihlášení</button>
                </p>
            </fieldset>
        </form>


    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>