
 
function searchMovie (api) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", `https://api-content.ingresso.com/v0/templates/highlights/${api}/partnership/home`);
	
	xhr.addEventListener("load", function(){
		var response = xhr.responseText;
		var contentMovie = JSON.parse(response);
		
				
		for (i=0; i< contentMovie.length; i++){
						 
				
				let trailer;
				let name  = contentMovie[i].event.title;
				let imageContent = contentMovie[i].event.images[0].url;
				let imageTop = contentMovie[i].event.images[1].url;
				if (contentMovie[i].event.trailers.length === 0){
					 trailer = "";
				}else {
					 trailer = contentMovie[i].event.trailers[0].embeddedUrl;
				}
				
				const movie = document.getElementById('movie');	
				const movieTop = document.getElementById('teste');
				renderList(imageContent,imageTop,name,trailer, movie,movieTop);
					
		}

		var elem = document.querySelector('.main-topo');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true
});
					
	});
	
	xhr.send();	
} 

