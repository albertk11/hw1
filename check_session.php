<?php

require_once 'auth.php';
require_once 'dbconfig.php';
header('Content-Type: application/json');

if ($userid = checkAuth()) {
    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
    $userid = mysqli_real_escape_string($conn, $userid);
    
    $query = "SELECT username FROM users WHERE id = $userid";
    $res = mysqli_query($conn, $query);

    if ($row = mysqli_fetch_assoc($res)) {
        echo json_encode([
            "logged_in" => true,
            "username" => $row['username']
        ]);
    mysqli_close($conn);    
    }else{
    echo json_encode(["logged_in" => false]);
    }    
}else{
    echo json_encode(["logged_in" => false]);
}
?>