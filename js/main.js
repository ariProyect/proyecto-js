/*
BUSCAR SIEMPRE EN LA DOCUMENTACION QUE EXISTEN MUCHAS FORMAS DE HACERLO
pagina del slider jquery plugin: https://bxslider.com/

pagina de moment:  https://cdnjs.com/libraries/moment.js/

para hacer lo del reloj plugin:  https://momentjs.com/

plugin para validar formulario:   http://www.formvalidator.net/


*/
$(document).ready(function(){

	//cargar la libreria solo en la pagina de index
	if(window.location.href.indexOf('index') > -1){
		//Slider

		 $('.galeria').bxSlider({
		    mode: 'fade',
		    captions: false,
		    slideWidth: 1200,
		    resposive: true,
		    pager: true

		  });
	}	 


     //Posts
     if(window.location.href.indexOf('index') > -1){
	     //esto es un array de json
	     var posts = [
	         {
	         	title: 'Prueba de titulo 1',
	         	date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), //fecha actual
	         	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt feugiat nunc vel bibendum. Donec at pulvinar lacus. Phasellus interdum sagittis sollicitudin. Sed sit amet viverra enim. Praesent varius dui quis mi imperdiet, vitae dapibus erat maximus.'

	         },
	         {
	         	title: 'Prueba de titulo 2',
	         	date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), //fecha actual
	         	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt feugiat nunc vel bibendum. Donec at pulvinar lacus. Phasellus interdum sagittis sollicitudin. Sed sit amet viverra enim. Praesent varius dui quis mi imperdiet, vitae dapibus erat maximus.'
	         },
	         {
	         	title: 'Prueba de titulo 3',
	         	date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), //fecha actual
	         	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt feugiat nunc vel bibendum. Donec at pulvinar lacus. Phasellus interdum sagittis sollicitudin. Sed sit amet viverra enim. Praesent varius dui quis mi imperdiet, vitae dapibus erat maximus.'
	         },
	         {
	         	title: 'Prueba de titulo 4',
	         	date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), //fecha actual
	         	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt feugiat nunc vel bibendum. Donec at pulvinar lacus. Phasellus interdum sagittis sollicitudin. Sed sit amet viverra enim. Praesent varius dui quis mi imperdiet, vitae dapibus erat maximus.'
	         },
	         {
	         	title: 'Prueba de titulo 5',
	         	date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), //fecha actual
	         	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt feugiat nunc vel bibendum. Donec at pulvinar lacus. Phasellus interdum sagittis sollicitudin. Sed sit amet viverra enim. Praesent varius dui quis mi imperdiet, vitae dapibus erat maximus.'
	         },
	     ];

	     //console.log(posts);
	     
	     posts.forEach((item, index) =>{
	        //esto sera una plantilla de javascript
	     	var post = `

	     	      <article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer más</a>
						
					</article>

	     	`;
	     	//console.log(post);
	     	//ahora estos datos los incrustare en la pagina
	     	$('#posts').append(post);

	     });
	  }   

     //Selector de tema (cambio de colores)
     var theme = $('#theme'); //es el id del href del css
     
     $('#to-green').click(function(){
         theme.attr('href', 'css/green.css');
     });

     $('#to-red').click(function(){
         theme.attr('href', 'css/red.css');
     });

     $('#to-blue').click(function(){
         theme.attr('href', 'css/blue.css');
     });

 
 	//Scroll arriba para regresar arriba
	 $('.subir').click(function(e){
	 	e.preventDefault();// para que el link no nos lleve a otro sitio
	       //uso de animate
	       $('html, body').animate({
	       	     scrollTop: 0  //iria hacia el principio de la pagina
	       }, 500);

	       return false;  //para que no redirija
	 });

	 //Login falso

	 $('#login form').submit(function(){
	 	//recoger los datos del formulario
	 	var form_name = $('#form_name').val();

	 	//guardando valor en el localstorage
	 	localStorage.setItem('form_name', form_name);
	 });

    
    //una vez que se recargue la pantalla recoja ese valor en el localstorage
    var form_name = localStorage.getItem('form_name');
    
    if(form_name != null && form_name != 'undefined'){ //comprobar que no sea nulo
         var about_parrafo = $('#about p');
         about_parrafo.html('<br><strong>Bienvenido, ' + form_name + '</strong>');
         //para cerrar la sesion
         about_parrafo.append('<a href="#" id="logout">Cerrar sesion</a>');

         $('#login').hide(); //oculto todo lo del formulario una vez identificado
    
         //para cerrar la sesion cuando le de click
         $('#logout').click(function(){
         	localStorage.clear(); //asi borro todas las variables guardadas en el localstorage
         
            //que me actualice la pantalla
            location.reload();
         });

    }

    
    //se hara el acordeon solo cuando este en la pagina de about
    if(window.location.href.indexOf('about') > -1){

    	$('#acordeon').accordion();

    }


    //Reloj
     if(window.location.href.indexOf('reloj') > -1){
     	
        setInterval(function(){
             var reloj = moment().format('h:mm:ss');
     	     $('#reloj').html(reloj);
        }, 1000);
     	
     } 	


     //Validacion formulario
      if(window.location.href.indexOf('contact') > -1){
             //cargando el plugin de fecha
             $('form input[name="date"]').datepicker({
             	dateFormat: 'dd-mm-yy'
             });

             $.validate({
			    lang: 'es' ,
			    errorMessagePosition: 'top' , //se va arriba
			    scrollToTopOnError: true      //cuando se hace submit te lleva arriba de manera detallada
			 });
       }

});