let marvel = {
	render: function(){
		let urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2969754bc52865ea520fa0bdfa979d7a&hash=78f5f6452549771ab88981a4c55acf80';
		let contenedor = document.getElementById('marvel-container');
		let mensaje = document.getElementById('mensaje');
		let contenidoHTML='';

		$.ajax({
			url:urlAPI,
			type:'GET',
			beforeSend:function(){
				mensaje.innerHTML='Cargando....';
			},
			complete:function(){
				mensaje.innerHTML='Carga finaliza....';
			},
			success:function(response){
				contenidoHTML="<div class='row'>";
				for (let i=0; i<response.data.results.length;i++){
					 let element = response.data.results[i];
					 let imagen = element.thumbnail.path+'/portrait_fantastic.'+element.thumbnail.extension;
					 let urlPersonaje= element.urls[0].url;
					 contenidoHTML+="<div class='col-md-3'>";
					 	contenidoHTML+="<a href='"+urlPersonaje+"' target='_blank'>";
					 		contenidoHTML+="<img src='"+imagen+"' class='img-thumbnail'>";
					 	contenidoHTML+="</a>";
					 	contenidoHTML+="<h3>"+element.name+"</h3>";
					 contenidoHTML+="</div>";

					 if((i+1)%4==0){
					 	contenidoHTML+="</div>";
					 	contenidoHTML+="<div class='row'>";					 	
					 }					 
				}
				contenedor.innerHTML= contenidoHTML;
			},
			error:function(){
				mensaje.innerHTML='Error....';
			}
		});
	}
};
marvel.render();