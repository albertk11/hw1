function onJson(json) {
  console.log('JSON ricevuto');
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  const results = json.albums.items;
  let num_results = results.length;
  if(num_results > 18)
    num_results = 18;
  for(let i=0; i<num_results; i++)
  {
    const album_data = results[i]
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    const album = document.createElement('div');
    album.classList.add('album');
    const img = document.createElement('img');
    img.src = selected_image;
    const caption = document.createElement('span');
    caption.textContent = title;
    album.appendChild(img);
    album.appendChild(caption);
    library.appendChild(album);
  }
}

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

function search(event) {
  event.preventDefault();
  const album_input = document.querySelector('#album');
  const album_value = encodeURIComponent(album_input.value);

  console.log('Ricerca album:', album_value);

  fetch("album.php?q=" + album_value).then(onResponse).then(onJson);  
}

const form = document.querySelector('form'); 
form.addEventListener('submit', search) 
