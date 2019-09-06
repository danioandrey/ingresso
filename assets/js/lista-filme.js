getSelectValue();



function renderList(imageContent,imageTop, name, trailer, movie, movieTop) {
  const contentCarousel = createCarousel(imageTop,name);
  const contentList = createList(imageContent, name, trailer);
  movieTop.innerHTML += contentCarousel;
  movie.innerHTML += contentList;


}
function createCarousel(imageTop,name) {
  return `<div class="carousel-cell"><img src="${imageTop}" alt="${name}"></div>`;

}
function createList(imageContent, name, trailer) {
  return `	
		 <li><a href="https://${trailer}"><img class="image" src="${imageContent}" /></a><br /><span>${name}</span></li>`;
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
