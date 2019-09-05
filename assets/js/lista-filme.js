getSelectValue();

function renderList(url, name, trailer, element) {
  const contentList = createList(url, name, trailer);
  element.innerHTML += contentList;
}

function createList(url, name, trailer) {
  return `	
		 <li><a href="https://${trailer}"><img class="image" src="${url}" /></a><br /><span>${name}</span></li>`;
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

  searchMovie(api);
}

function removeTag () {
	
	document.getElementById('movie').innerHTML = ``; 	
}
