<?php
require "./lib/_users.php";

if (isset($_POST["register"])) {
    echo "$_POST";
}
?>

<!DOCTYPE html>
<html lang="cs">

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

        <div class="page unauthorized registr">
            <form class="register" action="register" method="post">
                <input class="register login" placeholder="login" type="text">
                <input class="register passwod" placeholder="password" type="password">
                <button class="register" type="submit">register</button>
            </form>

        </div>

    </main>

</body>

</html>