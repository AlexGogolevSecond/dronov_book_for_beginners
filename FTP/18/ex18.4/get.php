<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Изображение</title>
        <link href="18.3.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <?php
            $images_folder = '/images/';
            $descriptions_folder = '/descriptions/';
            $current_dir = dirname($_SERVER['SCRIPT_FILENAME']);
            $fn = $_GET['image'];
            $path = $current_dir . $descriptions_folder . $fn . '.txt';
            if (file_exists($path)) {
                $s = file_get_contents($path);
                echo '<h1>' . $s . '</h1>';
            } else
                echo '<h1>Изображение</h1>';
        ?>
        <section id="photo">
            <?php
                $path = $images_folder . $fn . '.jpg';
                echo '<img src="' . $path . '">'
            ?>
        </section>
        <p><a href="/#<?php echo $fn ?>">Назад</a></p>
    </body>
</html>