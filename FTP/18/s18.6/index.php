<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Фотогалерея</title>
        <link href="18.3.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>Фотогалерея</h1>
        <p><a href="/add.php">Добавить изображение</a></p>
        <section id="photogallery">
            <?php
                $images_folder = '/images/';
                $current_dir = dirname($_SERVER['SCRIPT_FILENAME']);
                $path = $current_dir . $images_folder;
                if ($dh = opendir($path)) {
                    while (($file = readdir($dh)) !== false){
                        if ($file != '.' && $file != '..') {
                            $n = pathinfo($file, PATHINFO_FILENAME);
                            echo '<a href="/get.php?image=' . $n . '" id="' . $n . '">';
                            echo '<img src="' . $images_folder . $file . '">';
                            echo '</a>';
                        }
                    }
                    closedir($dh);
                }
            ?>
        </section>
    </body>
</html>