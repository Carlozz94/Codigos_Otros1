const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const username ="stolinski";
const $n = document.getElementById('name'); // Cambiado 'name' por '#name'
const $b = document.getElementById('blog');
const $l = document.getElementById('location');

async function displayUser(username) { // Agregado 'async'
  $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Agregado 'await' y convertido a JSON
    return data;   
}

displayUser(username).then(data =>{
  
  $n.textContent = data.name; // Cambio '${data.name}' por 'data.name'
  $b.textContent = data.blog;
  $l.textContent = data.location;
  console.log(data);
}).catch(handleError);

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Agregado '$' para interpolar la variable err
}