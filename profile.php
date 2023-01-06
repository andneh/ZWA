<?php
require "lib/_db.php";

session_start();
$uid = isset($_SESSION['uid']) ? $_SESSION['uid'] : NULL;

if ($uid) {
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

        <div class="page profile">
            <div class="profile info">
                <h2>
                    <?php
                    echo "{$user['fname']} {$user['lname']}";
                    ?>
                </h2>
                <a href="logout.php">logout</a>
            </div>

            <form class="write" action="#" method="post">
                <!-- TODO add article -->
                <input class="write" placeholder="New article" type="text">
                <button class="write" type="submit">publish</button>
            </form>
            <div class="wrapper articles colection"></div>
            <!--  TODO get articles by uid and sort -->
        </div>

    </main>

</body>

</html>