<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Load existing comments
$comments = json_decode(file_get_contents("comments.json"), true);

// Send the comments as JSON response
echo json_encode($comments);

?>
