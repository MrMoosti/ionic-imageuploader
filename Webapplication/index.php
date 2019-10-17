<?php
$files = scandir('./');
$images = [];

foreach($files as $file) {
    if(endsWith($file, '.jpg')) {
        array_push($images, $_SERVER['REQUEST_URI'] . $file);
    }
}
print_r(json_encode($images));

function endsWith($haystack, $needle) {
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }
    return (substr($haystack, -$length) === $needle);
}