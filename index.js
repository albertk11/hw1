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

const items = [
        { text: 'TUTTI I PRODOTTI', img: 'immagini/zero.png' },
        { text: 'MONSTER ENERGY', img: 'immagini/lattina-classica.png' },
        { text: 'MONSTER ULTRA', img: 'immagini/ultra-white.png' },
        { text: 'JUICED MONSTER', img: 'immagini/mango-loco.png' }
    ];
const items2 = [
        { text: 'NEWS', img: 'immagini/news.png' },
        { text: 'MUSICA', img: 'immagini/musica.png' },
        { text: 'GAMING', img: 'immagini/gaming.png' },
        { text: 'GIRLS', img: 'immagini/girls.png' },
        { text: 'EVENTI', img: 'immagini/eventi.png' },
        { text: 'ROSTER', img: 'immagini/roster.png' }
    ];

function apriTendina() {
    const tenda = document.querySelector("#tenda");
    const tenda2 = document.querySelector("#tenda2");
    const tenda3 = document.querySelector("#tenda3");
    const tendina = tenda.querySelector('.tendina');
    const aa = tendina.querySelectorAll('a');
    const pro = document.querySelector("#prod");
    
    if(tenda2.classList.contains('hidden') === false) {
        tenda2.classList.add('hidden');
        document.querySelector("#unleashed").dataset.clicked = 'false';
    }
    if(tenda3.classList.contains('hidden') === false) {
        tenda3.classList.add('hidden');
        document.querySelector("#promo").dataset.clicked = 'false';
    }
    
    if(pro.dataset.clicked === 'false') {
        tenda.classList.remove('hidden');
        for (let i = 0; i < aa.length; i++) {
            aa[i].innerHTML = '';
            aa[i].appendChild(createP(items[i].text));
            aa[i].appendChild(createImage(items[i].img));
        }
        pro.dataset.clicked = 'true';
    } else {
        tenda.classList.add('hidden');
        pro.dataset.clicked = 'false';
    }
}

function apriTendina2() {
    const tenda = document.querySelector("#tenda");
    const tenda2 = document.querySelector("#tenda2");
    const tenda3 = document.querySelector("#tenda3");
    const tendina2 = tenda2.querySelector('.tendina');
    const aa2 = tendina2.querySelectorAll('a');
    const unl = document.querySelector("#unleashed");
    
    if(tenda.classList.contains('hidden') === false) {
        tenda.classList.add('hidden');
        document.querySelector("#prod").dataset.clicked = 'false';
    }
    if(tenda3.classList.contains('hidden') === false) {
        tenda3.classList.add('hidden');
        document.querySelector("#promo").dataset.clicked = 'false';
    }
    
    if(unl.dataset.clicked === 'false') {
        tenda2.classList.remove('hidden');
        for (let j = 0; j < aa2.length; j++) {
            aa2[j].innerHTML = '';
            aa2[j].appendChild(createP(items2[j].text));
            aa2[j].appendChild(createImage(items2[j].img));

            aa2[j].addEventListener('click', function(e) {
                if(items2[j].text === 'MUSICA') {
                    e.preventDefault();
                   window.open("musica.php", "_blank");
                }
            });
        }
        unl.dataset.clicked = 'true';
    } else {
        tenda2.classList.add('hidden');
        unl.dataset.clicked = 'false';
    }
}

function apriTendina3() {
    const tenda = document.querySelector("#tenda");
    const tenda2 = document.querySelector("#tenda2");
    const tenda3 = document.querySelector("#tenda3");
    const tendina3 = tenda3.querySelector('.tendina');
    const promo = document.querySelector("#promo");
    
    if(tenda2.classList.contains('hidden') === false) {
        tenda2.classList.add('hidden');
        document.querySelector("#unleashed").dataset.clicked = 'false';
    }
    if(tenda.classList.contains('hidden') === false) {
        tenda.classList.add('hidden');
        document.querySelector("#prod").dataset.clicked = 'false';
    }
    
    if(promo.dataset.clicked === 'false') {
        tenda3.classList.remove('hidden');
        promo.dataset.clicked = 'true';
    } else {
        tenda3.classList.add('hidden');
        promo.dataset.clicked = 'false';
    }
}

function cambiaSfondo() { 
  const bkg = document.querySelector('#img-ragazze');
  const divdanascondere  = document.querySelector('#scomparsa');
  const bottone = document.querySelector('.sopraimg')
  if(bottone.dataset.clicked==='false'){
  bkg.style.backgroundImage = 'url("immagini/cod.png")';
  bottone.dataset.clicked='true';
  divdanascondere.classList.add('hidden');
  return;
  }
  divdanascondere.classList.remove('hidden');
  bkg.style.backgroundImage = 'url("immagini/ultra-rosa.png")';
  bottone.dataset.clicked='false';
}

let EMAILCHECK;
document.getElementById("email").addEventListener("focusout", focusoutNewsletterEmail);
document.getElementById("email").value="Inserisci La Tua E-mail";
function focusoutNewsletterEmail()
{
    if(document.getElementById("email").value==="")
        { 
            document.getElementById("email").value="Inserisci La Tua E-mail"
        }
        else EMAILCHECK=document.getElementById("email").value;
}

document.getElementById("email").addEventListener("click",clicknewsletteremail);

function clicknewsletteremail(event)
{
    EMAILCHECK="";
document.getElementById("email").value=null;
}
           
document.getElementById("bottoneinvio").addEventListener("click",buttonnewsletter)
const Key_abstract="secret";
function buttonnewsletter()
{
event.preventDefault();
EMAILCHECK=document.getElementById("email").value;
console.log(EMAILCHECK);
let responsejson;
const options = {method: 'GET'};
fetch("https://emailvalidation.abstractapi.com/v1/?api_key="+Key_abstract+"&email=" + EMAILCHECK , options)
  .then(response => response.json())
  .then(response => onJsonCerca(response))
  .catch(err => console.error(err));
  document.getElementById("email").value="Inserisci La Tua E-mail";
}
function onJsonCerca(json)
{
    let Deliverable = json.deliverability;
   if(Deliverable==="DELIVERABLE")
    {
        window.alert("E-mail Corretta");
    }
    else
    {
        window.alert("E-mail Sbagliata");
    }
}

for (const bottoncini of document.querySelectorAll('.sopraimg')) {
  bottoncini.addEventListener('click', cambiaSfondo);
}

for (const tendina of document.querySelectorAll('#prod')) {
  tendina.addEventListener('click', apriTendina);
}

for (const tendina2 of document.querySelectorAll('#unleashed')) {
  tendina2.addEventListener('click', apriTendina2);
}

for (const tendina3 of document.querySelectorAll('#promo')) {
  tendina3.addEventListener('click', apriTendina3);
}