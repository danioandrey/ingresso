
 
function buscaFilme (api) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", `https://api-content.ingresso.com/v0/templates/highlights/${api}/partnership/home`);
	
	xhr.addEventListener("load", function(){
		var resposta = xhr.responseText;
		var title = JSON.parse(resposta);
		
		
		
		
		for (i=0; i< title.length; i++){
						 
				
				let trailer;
				let nome  = title[i].event.title;
				let url = title[i].event.images[0].url;
				if (title[i].event.trailers.length === 0){
					 trailer = "";
				}else {
					 trailer = title[i].event.trailers[0].embeddedUrl;
				}
				
				const filme = document.getElementById('movie');	
				renderlista(url,nome,trailer, filme);

				 			

			
		}
			
		
	});
	
	xhr.send();
	
} 

