<?php
require_once 'dbconfig.php';
header('Content-Type: application/json');

$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

$query = "SELECT * FROM Monster ORDER BY Categoria, NomeMonster";
$result = mysqli_query($conn, $query);

$monster = array();
while ($row = mysqli_fetch_assoc($result)) {
    $monster[] = $row;
}

mysqli_free_result($result);
mysqli_close($conn);

echo json_encode($monster);
?>