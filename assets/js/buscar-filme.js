
 
function searchMovie (api) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", `https://api-content.ingresso.com/v0/templates/highlights/${api}/partnership/home`);
	
	xhr.addEventListener("load", function(){
		var response = xhr.responseText;
		var contentMovie = JSON.parse(response);
		
				
		for (i=0; i< contentMovie.length; i++){
						 
				
				let trailer;
				let name  = contentMovie[i].event.title;
				let url = contentMovie[i].event.images[0].url;
				if (contentMovie[i].event.trailers.length === 0){
					 trailer = "";
				}else {
					 trailer = contentMovie[i].event.trailers[0].embeddedUrl;
				}
				
				const movie = document.getElementById('movie');	
				renderList(url,name,trailer, movie);
					
		}
					
	});
	
	xhr.send();	
} 

