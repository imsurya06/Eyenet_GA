<?php
// Instant Server-Side Zip Extractor for Virtual Tour
$zipFile = 'virtualtour_package.zip';

if (!file_exists($zipFile)) {
    die("Error: $zipFile does not exist in public_html.");
}

$zip = new ZipArchive;
$res = $zip->open($zipFile);

if ($res === TRUE) {
    $zip->extractTo('./');
    $zip->close();
    echo "<h1>🎉 360° Virtual Tour Successfully Extracted 100%!</h1><p>You can now open <a href='/virtualtour/'>/virtualtour/</a></p>";
} else {
    echo "<h1>❌ Failed to extract zip file. Code: $res</h1>";
}
?>
