const listaTweets = document.getElementById("lista-tweets");

eventListeners();

function eventListeners() {
  console.log("prueba");
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
}

function agregarTweet(e) {
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  
  const botonBorrar = document.createElement('a');
  botonBorrar.classList='borrar-tweet';
  botonBorrar.innerText = 'x';
  
  
  const li = document.createElement('li');
  li.innerText = tweet;
  li.appendChild(botonBorrar);
  listaTweets.appendChild(li);

  console.log(li);
  
}
