<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Вывод текущей даты</title>
    </head>
    <body>
        <h1>Текущая дата</h1>
        <?php
            $timestamp = time();
            $date = date('d.m.Y', $timestamp);
        ?>
        <p>Сегодня <?php echo $date ?></p>
        <?php
            $d = getdate($timestamp);
            $month = $d['mon'];
            if ($month == 1 || $month == 2 || $month == 12)
                $season = 'зима';
            else if ($month >= 3 && $month <= 5)
                $season = 'весна';
            else if ($month >= 6 && $month <= 8)
                $season = 'лето';
            else
                $season = 'осень';
            echo '<p>Сейчас ' . $season . '</p>'
        ?>
    </body>
</html>
