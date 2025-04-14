<?php
$dir = "uploads/";
$videos = array_diff(scandir($dir), ['.', '..']);
echo json_encode(array_values($videos));
?>
