getSelectValue();

function renderlista(url, nome, trailer, element) {
  const markup = criaLista(url, nome, trailer);
  element.innerHTML += markup;
}

function criaLista(url, nome, trailer) {
  return `	
		 <li><a href="https://${trailer}"><img class="image" src="${url}" /></a><br /><span>${nome}</span></li>`;
}

let button = document.querySelector("#btnCarregar");

button.addEventListener("click", function(event) {
  event.preventDefault();
  removeTag();
  getSelectValue();
});

function getSelectValue() {
  let api = 1;
  /*let cidade = document.getElementById("cboCidades").value;
  let api = "";
  if (cidade === "sp") {
    api = 1;
  } else if (cidade === "rj") {
    api = 2;
  }*/

  buscaFilme(api);
}

function removeTag () {
	
	document.getElementById('movie').innerHTML = ``; 	
}
