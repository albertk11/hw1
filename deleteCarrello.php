<?php
require_once 'auth.php';

if (!$userid = checkAuth()) {
    header("Location: login.php");
    exit;
}

$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

if (isset($_POST["ID_Monster"])) {
    $userid = mysqli_real_escape_string($conn, $userid);
    $IDMonster = mysqli_real_escape_string($conn, $_POST["ID_Monster"]);
    
    $query = "
    SELECT Quantita 
    FROM ElementiCarrello 
    WHERE ID_Carrello IN (
        SELECT ID FROM Carrello WHERE ID_Cliente = $userid AND Attivo = true
    ) 
    AND ID_Monster = $IDMonster
";
$result = mysqli_query($conn, $query) or die(mysqli_error($conn));
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    if ($row['Quantita'] > 1) {
        $query_update = "
            UPDATE ElementiCarrello
            SET Quantita = Quantita - 1
            WHERE ID_Carrello IN (
                SELECT ID FROM Carrello WHERE ID_Cliente = $userid AND Attivo = true
            ) 
            AND ID_Monster = $IDMonster
        ";
        mysqli_query($conn, $query_update) or die(mysqli_error($conn));
        echo "Quantità ridotta di 1.";
    } else {
        $query_delete = "
            DELETE FROM ElementiCarrello 
            WHERE ID_Carrello IN (
                SELECT ID FROM Carrello WHERE ID_Cliente = $userid AND Attivo = true
            ) 
            AND ID_Monster = $IDMonster
        ";
        mysqli_query($conn, $query_delete) or die(mysqli_error($conn));
        echo "Prodotto rimosso dal carrello.";
    }
} else {
    echo "Prodotto non trovato nel carrello.";
}

    mysqli_close($conn);
}
?>
