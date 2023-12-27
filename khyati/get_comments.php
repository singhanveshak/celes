<?php

// Load existing comments
$comments = json_decode(file_get_contents("comments.json"), true);

// Send the comments as JSON response
echo json_encode($comments);

?>
