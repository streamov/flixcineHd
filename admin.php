<?php
// Fungsi untuk mendapatkan video dari LK21 menggunakan scraping
function getLK21Videos() {
    $url = "https://lk21official.cc/";  // URL dari website yang kita ingin scrap
    $htmlContent = file_get_contents($url);  // Ambil HTML dari URL tersebut
    
    // Sekarang, kita perlu mencari dan mengekstrak video dari HTML
    // (contoh regex, ini bergantung kepada struktur HTML LK21)
    
    preg_match_all('/<a href="(https:\/\/www\.youtube\.com\/watch\?v=[^"]+)"/', $htmlContent, $matches);
    
    // Ambil semua URL video YouTube
    $videoUrls = $matches[1]; 

    // Simpan video dalam format array untuk digunakan
    $videos = [];
    foreach ($videoUrls as $url) {
        $videos[] = [
            "title" => "Video dari LK21",
            "embedUrl" => $url
        ];
    }

    return $videos;
}

// Simpan video ke dalam `videos.json`
function saveVideosToJson($videos) {
    file_put_contents('videos.json', json_encode($videos, JSON_PRETTY_PRINT));
}

// Ambil video dari LK21 dan simpan dalam JSON
$videos = getLK21Videos();
saveVideosToJson($videos);

// Redirect ke halaman admin untuk menunjukkan hasil
header("Location: admin.html");
exit;
?>
