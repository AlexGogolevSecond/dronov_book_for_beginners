<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Фотогалерея</title>
        <link href="18.3.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>Фотогалерея</h1>
        <section id="photogallery">
            <?php
                $images_folder = '/images/';
                $current_dir = dirname($_SERVER['SCRIPT_FILENAME']);
                $path = $current_dir . $images_folder;
                if ($dh = opendir($path)) {
                    while (($file = readdir($dh)) !== false){
                        if ($file != '.' && $file != '..') {
                            echo '<a href="">';
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