<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Retrieve the JSON data from the request
$data = file_get_contents("php://input");
$comment = json_decode($data);

// Load existing comments
$comments = json_decode(file_get_contents("comments.json"), true);

// Add the new comment
$comments[] = $comment;

// Save the updated comments to the file
file_put_contents("comments.json", json_encode($comments));

?>
