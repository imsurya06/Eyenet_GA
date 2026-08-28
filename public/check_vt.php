<?php
// Diagnostic: Check EYE NET panorama files on server
$base = './virtualtour/media/';
$eyenet_folder = 'panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0';
$reception_folder = 'panorama_528D5649_58F5_D532_41C2_57FD34F57382_0';

function countFilesInDir($path) {
    if (!is_dir($path)) return "FOLDER MISSING!";
    $count = 0;
    $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path, FilesystemIterator::SKIP_DOTS));
    foreach ($rii as $file) { if ($file->isFile()) $count++; }
    return $count . " files";
}

function checkTile($path) {
    return file_exists($path) ? "EXISTS ✓" : "MISSING ✗";
}

echo "<h2>Virtual Tour Server Diagnostic</h2>";
echo "<h3>EYE NET Panorama (panorama_527FFB31...)</h3>";
echo "<p>Folder: " . countFilesInDir($base . $eyenet_folder) . "</p>";
echo "<p>Level 3 tile u/3/0_0.jpg: " . checkTile($base . $eyenet_folder . '/u/3/0_0.jpg') . "</p>";
echo "<p>Level 2 tile u/2/0_0.jpg: " . checkTile($base . $eyenet_folder . '/u/2/0_0.jpg') . "</p>";
echo "<p>Level 0 folder exists: " . (is_dir($base . $eyenet_folder . '/u/0') ? "YES ✓" : "NO ✗") . "</p>";

echo "<h3>RECEPTION Panorama (panorama_528D5649...) - working room for comparison</h3>";
echo "<p>Folder: " . countFilesInDir($base . $reception_folder) . "</p>";
echo "<p>Level 3 tile u/3/0_0.jpg: " . checkTile($base . $reception_folder . '/u/3/0_0.jpg') . "</p>";

echo "<h3>All panorama folders in /virtualtour/media/:</h3>";
$dirs = glob($base . 'panorama_*', GLOB_ONLYDIR);
foreach ($dirs as $dir) {
    $name = basename($dir);
    $count = countFilesInDir($dir);
    echo "<p>$name: $count</p>";
}
?>
