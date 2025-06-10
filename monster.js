function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }

function createP(p){
    const testo = document.createElement('p');
    testo.textContent = p;
    return testo;
}

function createDiv(){
    const div = document.createElement('div');
    div.classList.add('categoria-div');
    return div;
}

function onResponse(response){
   return response.json();
 }

fetch("getMonster.php").then(onResponse).then(onMonster);

function onMonster(json){
      console.log(json);
      const container = document.getElementById('monster-container');  
      let lastCategoria = null;
      let categoriaDiv = null;  
      for(let monster of json) {
        let categoria = monster.Categoria;

        if(categoria !== lastCategoria){
        categoriaDiv = createDiv();

            const titoloCategoria = document.createElement('h2');
            titoloCategoria.textContent = categoria;
            categoriaDiv.appendChild(titoloCategoria);
            
            container.appendChild(categoriaDiv);
            lastCategoria = categoria;
        }

        const monsterdiv = createDiv();
        monsterdiv.classList.add('monster-div');
        categoriaDiv.appendChild(monsterdiv);
        const img = createImage(monster.LinkImmagine); 
        const nome = createP(monster.NomeMonster);
        nome.classList.add('nome');
        let price = monster.Prezzo;
        const prezzo = createP(price + "€");
        prezzo.classList.add('prezzo');
        const bottone_add = document.createElement('button');
        bottone_add.textContent = 'AGGIUNGI AL CARRELLO';
        bottone_add.classList.add('btn-carrello');
        let monster_id = monster.id;
        bottone_add.dataset.index = monster_id;
        bottone_add.addEventListener('click', CaricanelCarrello);
        const bottone_remove = document.createElement('button');
        bottone_remove.textContent = 'RIMUOVI DAL CARRELLO';
        bottone_remove.classList.add('btn-carrello-rmv');
        bottone_remove.dataset.index = monster_id;
        bottone_remove.addEventListener('click', RimuovidalCarrello);
        monsterdiv.appendChild(img);
        monsterdiv.appendChild(nome);
        monsterdiv.appendChild(prezzo);
        monsterdiv.appendChild(bottone_add);
        monsterdiv.appendChild(bottone_remove);
    }
}

function onJsonCarrello(json){
console.log(json);
const tenda = document.getElementById("tenda"); 
tenda.innerHTML = "";
if(tenda.dataset.clicked === "false"){
tenda.classList.remove('hidden');
tenda.dataset.clicked = "true";

for(let carrello of json){
  const ElementoDiv = createDiv();
  ElementoDiv.classList.remove('categoria-div');
  ElementoDiv.classList.add('elemento-div');
  tenda.appendChild(ElementoDiv);
  const img = createImage(carrello.LinkImmagine);
  img.classList.add('img-tenda');
  ElementoDiv.appendChild(img);

  const nomeM = createP(carrello.NomeMonster);
  nomeM.classList.add('scrittecarrello');
  ElementoDiv.appendChild(nomeM);
  const numM = createP("N°" + (carrello.Quantita));
  numM.classList.add('scrittecarrello');
  ElementoDiv.appendChild(numM);
  const prezzosing = createP((carrello.Prezzo) + "€");
  prezzosing.classList.add('scrittecarrello');
  ElementoDiv.appendChild(prezzosing);
  
}
 let ultimo = json[json.length - 1]; 
 let totale = ultimo.PrezzoTotale;
 const PFinale = createP("Prezzo Totale: "+ totale + "€");
 PFinale.classList.add('Prezzototale');
 tenda.appendChild(PFinale);
 console.log(json[0].PrezzoTotale);
}else if(tenda.dataset.clicked === "true"){
tenda.classList.add('hidden');
tenda.dataset.clicked = "false";
}
}


function onResponseCarrello(response){
console.log(response);  
if (response.url =="http://localhost/provafinale/login.php"){
window.location.href = "login.php" ;
} 
return response.json();
}

function ApriCarrello(){

fetch("getCarrello.php").then(onResponseCarrello).then(onJsonCarrello);

}

function CaricanelCarrello(event){
const id = event.currentTarget.dataset.index;
let data = new URLSearchParams();
  data.append('ID_Monster', id);
  
  fetch('AddCarrello.php', {
      method: 'POST',
      body: data
  })
  .then(function(response) {
    if (response.url =="http://localhost/provafinale/login.php"){
    window.location.href = "login.php" ;
    return response.text();
  } 
  })
  .then(function(text) {
    console.log(text); 
    const tenda = document.getElementById("tenda"); 
    tenda.dataset.clicked = "false";   
    ApriCarrello();
  })
  .catch(function(error) {
    console.error('Errore:', error);
  });
}


function RimuovidalCarrello(event){
const id = event.currentTarget.dataset.index;
let data = new URLSearchParams();
  data.append('ID_Monster', id);
  
  fetch('deleteCarrello.php', {
      method: 'POST',
      body: data
  })
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log(text); 
    const tenda = document.getElementById("tenda"); 
    tenda.dataset.clicked = "false";
    ApriCarrello();
  })
  .catch(function(error) {
    console.error('Errore:', error);
  });
}

fetch("check_session.php").then(onResponse).then(onUser);

function onUser(data){
console.log(data);
const login = document.getElementById("scrittalogin");
const logout = document.getElementById("scrittalogout");
const signup = document.getElementById("scrittasignup");
const bent = document.getElementById("scrittabent");

if(data.logged_in === true){
login.classList.add("hidden");
logout.classList.remove("hidden");
signup.classList.add("hidden");
bent.classList.remove("hidden");
bent.textContent = "BENTORNATO, " + data.username;;
}else{
login.classList.remove("hidden");
logout.classList.add("hidden");
signup.classList.remove("hidden");
bent.classList.add("hidden");
}
}

document.getElementById("imgcarrello").addEventListener("click", ApriCarrello);



