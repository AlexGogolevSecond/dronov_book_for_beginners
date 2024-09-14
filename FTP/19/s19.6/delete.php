<?php
$images_folder = '/images/';
$descriptions_folder = '/descriptions/';
$current_dir = dirname($_SERVER['SCRIPT_FILENAME']);
unlink($current_dir . $images_folder . $_POST['image'] . '.jpg');
$path = $current_dir . $descriptions_folder . $_POST['image'] . '.txt';
if (file_exists($path))
    unlink($path);
$output['data']['status'] = 1;
$json = json_encode($output);
echo $json;
?>
