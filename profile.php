<!DOCTYPE html>
<html lang="cs">

<?php 
    include "includes/_head.php";
    ?>

<body class="root">

    <?php 
    include "includes/_header.php";
    ?>

    <main>
        <noscript>
            <p>
                Please, turn on JavaScript.
            </p>
        </noscript>

        <div  class="page profile">
            <div class="profile info">
                <p>
                    profile info
                </p>
            </div>

            <form class="write" action="#" method="post">
                <input class="write" placeholder="New article" type="text">
                <button class="write" type="submit">publish</button>
            </form>
            <div class="wrapper articles colection"></div>
        </div>

    </main>

</body>

</html>