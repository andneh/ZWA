<?php
require 'lib/_users.php';
//TODO testing on password
// TODO testing login
// TODO add user
// TODO auto login
if (isset($_POST['registration'])) {

    switch (false) {
        case $_POST['username']:
            $error = 'Jmeno ne ma byt prazne';
            break;
        case !getUserByUsername($_POST['username']):
            $error = 'Zkuste jine jmeno';
            break;
        case $_POST['fname']:
            $error = "Jmeno ne ma byt prazne";
            break;
        case $_POST['lname']:
            $error = "Prijmeni ne ma byt prezne";
            break;


        case $_POST['password1']:
            $error = "heslo ne ma byt prazne";
            break;

        case $_POST['password1'] == $_POST['password2']:
            $error = "Hesla nejsou stejni";
            break;
    }
    if (!$error) {
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
            <div>
                <label>
                    Username:
                    <input type="text" value="<?= isset($_POST['username']) ? $_POST['username'] : '' ?>"
                        name="username">
                </label>
            </div>
            <div>
                <label>
                    Jméno:
                    <input type="text" value="<?= isset($_POST['fname']) ? $_POST['fname'] : '' ?>" name="fname">
                </label>
            </div>
            <div>
                <label>
                    Příjmení:
                    <input type="text" value="<?= isset($_POST['lname']) ? $_POST['lname'] : '' ?>" name="lname">
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="password1">
                </label>
            </div>
            <div>
                <label>
                    opakujte Password:
                    <input type="password" name="password2">
                </label>
            </div>

            <input type="submit" name="registration" value="Registrovat se">

            <?php
            if (isset($error)) {
                echo "<p style=\"color:red;\">$error</p>";
            }
            ?>
        </form>
        <a href="login.php">login</a>


    </main>

</body>

</html>