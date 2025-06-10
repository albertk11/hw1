<?php

require_once 'auth.php';
if (!$userid = checkAuth()) {
    header("Location: login.php");
    exit;
}

$conn = mysqli_connect(
    $dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']
) or die(mysqli_error($conn));

if (isset($_POST["ID_Monster"])) {
    $userid = mysqli_real_escape_string($conn, $userid);
    $IDMonster = mysqli_real_escape_string($conn, $_POST["ID_Monster"]);

    $query = "SELECT ID FROM Carrello WHERE ID_Cliente = $userid AND Attivo = true";
    $result = mysqli_query($conn, $query) or die(mysqli_error($conn));

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $ID_Carrello = $row["ID"];
    } else {
        $query = "INSERT INTO Carrello (ID_Cliente) VALUES ($userid)";
        if (mysqli_query($conn, $query)) {
            $ID_Carrello = $conn->insert_id;
        } else {
            echo "Errore durante la creazione del carrello.";
            mysqli_close($conn);
            exit;
        }
    }

    $query2 = "
        SELECT E.Quantita, E.ID_Carrello, E.ID_Monster
        FROM ElementiCarrello E
        JOIN Carrello C ON C.ID = E.ID_Carrello
        WHERE C.ID_Cliente = $userid AND E.ID_Monster = $IDMonster
    ";
    $result2 = mysqli_query($conn, $query2) or die(mysqli_error($conn));

    if (mysqli_num_rows($result2) > 0) {
        $row2 = mysqli_fetch_assoc($result2);
        $new_quantity = $row2["Quantita"] + 1;
        $query = "
            UPDATE ElementiCarrello
            SET Quantita = $new_quantity
            WHERE ID_Carrello = {$row2['ID_Carrello']} AND ID_Monster = {$row2['ID_Monster']}
        ";
    } else {
        $query = "
            INSERT INTO ElementiCarrello (ID_Carrello, ID_Monster, Quantita)
            VALUES ($ID_Carrello, $IDMonster, 1)
        ";
    }

    if (mysqli_query($conn, $query)) {
        echo "Prodotto aggiunto al carrello con successo.";
    } else {
        echo "Errore durante l'aggiunta al carrello.";
    }

    mysqli_close($conn);
}
?>