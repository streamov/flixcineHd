<?php
if (isset($_POST['submit'])) {
    $title = $_POST['title'];
    $embedUrl = $_POST['embedUrl'];

    // Baca kandungan video.json sedia ada
    $jsonData = file_get_contents('videos.json');
    $videos = json_decode($jsonData, true);

    // Tambahkan video baru ke dalam array
    $videos[] = [
        'title' => $title,
        'embedUrl' => $embedUrl
    ];

    // Simpan data baru ke dalam videos.json
    file_put_contents('videos.json', json_encode($videos, JSON_PRETTY_PRINT));

    // Redirect semula ke admin panel
    header('Location: admin.html');
    exit();
}
?>
