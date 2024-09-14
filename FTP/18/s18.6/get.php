<?php
    $images_folder = '/images/';
    $descriptions_folder = '/descriptions/';
    $current_dir = dirname($_SERVER['SCRIPT_FILENAME']);
    $fn = (isset($_POST['submit'])) ? $_POST['name'] : $_GET['image'];
    $path = $current_dir . $descriptions_folder . $fn . '.txt';
    if (isset($_POST['submit'])) {
        unlink($current_dir . $images_folder . $fn . '.jpg');
        if (file_exists($path))
            unlink($path);
        header('Location: /');
        exit();
    }
    if (file_exists($path))
        $s = file_get_contents($path);
    else
        $s = 'Изображение';
?>
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title><?php echo $s ?></title>
        <link href="18.3.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1><?php echo $s ?></h1>
        <section id="photo">
            <?php
                $path = $images_folder . $fn . '.jpg';
                echo '<img src="' . $path . '">'
            ?>
        </section>
        <form action="/get.php" method="post">
            <input type="hidden" name="name" value="<?php echo $fn ?>">
            <p><input type="submit" name="submit" value="Удалить изображение"></p>
        </form>
        <p><a href="/#<?php echo $fn ?>">Назад</a></p>
    </body>
</html>