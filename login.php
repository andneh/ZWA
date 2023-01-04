<?php
require 'lib/_users.php';
if (isset($_POST['registration'])) {
    header('Location: registration.php');
}
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username && $password) {
        $user = getUserByUsername($username);
        if ($user) {
            if (password_verify($password . SALT, $user['passhash'])) {
                session_start();
                $_SESSION['uid'] = $user['uid'];
                header('Location: profile.php');
            } else {
                $error = 'Jmeno nebo heslo byly zadny spatne';
            }
        } else {
            $error = 'Jmeno nebo heslo byly zadny spatne';
        }
    } else {
        $error = 'Jmeno nebo heslo byly zadny spatne';
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
                <legend>Autorizace</legend>
                <?php
                if (isset($error)) {
                    echo "<p style=\"color:red;\">$error</p>";
                }
                ?>
                <p>
                    <label>
                        Username:
                        <input type="text" value="<?= isset($username) ? $username : '' ?>" name="username">
                    </label>
                </p>
                <p>
                    <label>
                        Password:
                        <input type="password" name="password">
                    </label>
                </p>
                <p>
                    <input type="submit" name="login" value="Prihlasit se">
                </p>
                <p>
                    <input type="submit" name="registration" value="Registrace">
                </p>
        </form>



    </main>

</body>

</html>