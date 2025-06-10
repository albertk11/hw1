<html>
<head>
    <meta charset="utf-8">
    <title>Monster Shop</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="monster.css">
    <script src="monster.js" defer></script>
</head>
<body>
    <header>
        <nav>
            <div id="logo">
                <img src="immagini/monster-logo.png">
            </div>
            <div class="scrittetop">
                <a href="index.php">HOME</a>
            </div>
            <div class="scrittetop">
                <a id="scrittalogin" href="login.php">LOGIN</a>
                <a id="scrittalogout" class = "hidden" href="logout.php">LOGOUT</a>
            </div>
            <div class="scrittetop">
                <a id="scrittasignup" href="signup.php">REGISTRATI</a>
                <a id="scrittabent" class="hidden"></a>
            </div>
            <div id="carrello">
                <img src="immagini/carrellob.png" id="imgcarrello">    
            </div>    
            <div id="lingua">
                <a>IT</a>
            </div>
        </nav>
    </header>
    <section id="tenda" class="hidden" data-clicked = "false"> </section>
    <div id="scrittaenorme">
    <h1>ENERGY DRINKS</h1>
    </div>
    <div id="monster-container">
    </div>    
</body>
</html>