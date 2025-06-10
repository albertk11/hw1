<?php 
   require_once 'auth.php';
  $userid = checkAuth();
?>

<html> 

  <?php 
    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
    $userid = mysqli_real_escape_string($conn, $userid);
    $query = "SELECT * FROM users WHERE id = $userid";
    $res_1 = mysqli_query($conn, $query);
    $userinfo = mysqli_fetch_assoc($res_1);   
  ?>

<head>
    <meta charset="utf-8">
    <title>Monster Energy</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
    <script src="index.js" defer></script>
</head>
<body>
    <header>
        <nav>
            <div id="logo">
                <img src="immagini/monster-logo.png">
            </div>
            <div id="scrittetop">
                <a href="#" class="greenbord" id="unleashed" data-clicked="false">UNLEASHED</a>
                <a href="#" class="greenbord" id="prod" data-clicked="false">PRODOTTI</a>
                <a href="#" class="greenbord" id="promo" data-clicked="false">PROMOZIONI</a>
            </div>
            </div>
            <div id="menu-mobile">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="lingua">
                <a>IT</a>
            </div>
        </nav>
    </header>
    <div id="tenda" class="hidden">
    <div class="tendina">
    <a href="monster.php"></a>
    <a href="monster.php"></a>
    <a href="monster.php"></a>
    <a href="monster.php"></a>
    </div>
    </div>
    <div id="tenda2" class="hidden">
    <div class="tendina">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    </div>
    </div>
    <div id="tenda3" class="hidden">
    <div class="tendina">
    </div>
    <form id="newsletter">
      Iscriviti alla newsletter 
      <input type="text" id="email">
      <input type="submit" id="bottoneinvio" value="Invia">
    </form>
    </div>
    <div id="img-ragazze">
        <button class="sopraimg" data-clicked="false">&#10094;</button>
        <button class="sopraimg" data-clicked="false">&#10095;</button>
    </div>
    <div id="scomparsa">
    <div id="combo">
        <p id="scrittasopraimg">Monster Ultra Strawberry Dreams<br>senza zucchero</p>
        <a href="#" class="button">GUARDA ORA</a>
    </div>
    </div>
    <p class="scrittabiancagrande">BEVANDE MONSTER ENERGY </p>
    <div id="trelattine">
        <img src="immagini/lattina-classica.png">
        <img src="immagini/ultra-white.png">
        <img src="immagini/mango-loco.png">
    </div>
    <a href="#" class="parallelepipedo">TUTTI I PRODOTTI</a>
    <p class="scrittabiancamedia">VIDEO DI TENDENZA</p>
    <p id="youtube">ISCRIVITI AL CANALE YOUTUBE</p>
    <a href="https://www.youtube.com/monsterenergy" class="parallelepipedo">TUTTI I VIDEO</a>
    <p class="scrittabiancamedia">PROMOZIONI<p>
    <div class="container">
        <div class="promo-box">
            <h2>CALL OF DUTY</h2>
            <h3>CALL OF DUTY X MONSTER ENERGY</h3>
            <p>We teamed up with Call of Duty again! Get double XP and<br>exclusive in-game items/skins with Monster Energy!</p>
            <a href="#" class="button">PARTECIPA ORA</a>
        </div>
        <div class="image-box">
            <img src="immagini/cod.png">
        </div>
    </div>
    <p id="ast">#MONSTERENERGY</p>
    <div id="prodotti">
        <div id="lattinafinale">
            <img src="immagini/lattina-classica.png">
        </div>
        <div id="meta">
            <h2>UNLEASH THE</h2>
            <h3>BEAST!</h3>
            <p>Tear into a can of the meanest energy drink on the planet,<br>Monster Energy.</p>
            <a href="#" class="button">PRODOTTI</a>
        </div>
    </div>
    <footer id="footer">
        <p>This work is not affiliated with, endorsed by, or sponsored by Monster Energy Company. All trademarks, logos, and brand names belong to their respective owners. This use is for informational/educational purposes only, with no intention of infringing on any copyrights or trademarks. No profit is being made from this material.</p>
    </footer>
</body>
</html>