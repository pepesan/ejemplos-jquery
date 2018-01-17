<?php
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);
//print_r($input);
header('Content-Type: application/json');
echo json_encode($input);
?>