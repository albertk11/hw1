<?php

require_once 'auth.php';
if (!$userid = checkAuth()) {
    header("Location: login.php");
    exit;
}

$conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

$carrello = array();
$query = "
    SELECT E.ID_Monster, E.Quantita, M.NomeMonster, M.Prezzo, M.LinkImmagine
    FROM ElementiCarrello E
    JOIN Carrello C ON C.ID = E.ID_Carrello
    JOIN Monster M ON M.ID = E.ID_Monster
    WHERE C.ID_Cliente = $userid
";

$result = mysqli_query($conn, $query) or die(mysqli_error($conn));
$num_rows = mysqli_num_rows($result);
$element = 0;
$prezzototale = 0;

while ($row = mysqli_fetch_assoc($result)) {
    if ($row['Quantita'] > 1) {
        $row['Prezzo'] = $row['Prezzo'] * $row['Quantita'];
        $row['Prezzo'] = number_format($row['Prezzo'], 2, '.', '');
    }

    $prezzototale += $row['Prezzo'];

    if ($element === $num_rows - 1) {
        $prezzototale = number_format($prezzototale, 2, '.', '');
        $row['Righe'] = $num_rows;
        $row['PrezzoTotale'] = $prezzototale;
    }
    
    $carrello[] = $row;
    //array_push($carrello,$row); EQUIVALENTE
    $element++;
}

if (count($carrello) === 0) {
    $carrello[] = array(
        'Righe' => 0,
        'PrezzoTotale' => 0
    );
}


mysqli_free_result($result);
mysqli_close($conn);

echo json_encode($carrello);
?>