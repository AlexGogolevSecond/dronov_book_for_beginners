<?php
$images_folder = '/images/';
$current_dir = dirname($_SERVER['SCRIPT_FILENAME']);
$output['data'] = [];
$path = $current_dir . $images_folder;
if ($dh = opendir($path)) {
    while (($file = readdir($dh)) !== false){
        if ($file != '.' && $file != '..') {
            $el['path'] = $images_folder . $file;
            $el['id'] = pathinfo($file, PATHINFO_FILENAME);
            $output['data'][] = $el;
        }
    }
    closedir($dh);
}
$json = json_encode($output);
echo $json;
?>
