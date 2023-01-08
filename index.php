<?php
require("lib/_db.php");
require("components/_articlesWrapper.php");

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

        <?php
        articlesWrapper(getArticles(), "like", "líbí se mi");
        ?>

    </main>

    <?php
    include "components/_footer.php";
    ?>

</body>

</html>