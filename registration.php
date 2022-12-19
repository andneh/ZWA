<?php
require 'lib/_users.php';
//TODO testing on password
// TODO testing login
// TODO login
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username && $password) {
        $user = getUserByUsername($username);
        if ($user) {
            if (password_verify($password, $user['passhash'])) {
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
            <div>
                <label>
                    Username:
                    <input type="text" value="<?= isset($username) ? $username : '' ?>" name="username">
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="password">
                </label>
            </div>

            <input type="submit" name="login" value="Registrovat se">

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