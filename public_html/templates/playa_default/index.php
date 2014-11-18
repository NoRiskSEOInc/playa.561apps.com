<!doctype html>
<html>
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="description" content=""/>
	<!--<meta name="viewport" content="width=device-width, initial-scale=1"/>-->
	<!--<title>Playa Resorts</title>-->

	<!-- Add to homescreen for Chrome on Android -->
	<meta name="mobile-web-app-capable" content="yes"/>
	<link rel="icon" sizes="196x196" href="templates/playaresorts/img/touch/chrome-touch-icon-196x196.png"/>

	<!-- Add to homescreen for Safari on iOS -->
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
	<meta name="apple-mobile-web-app-title" content="Playa Resorts"/>

	<!-- Tile icon for Win8 (144x144 + tile color) -->
	<meta name="msapplication-TileImage" content="templates/playaresorts/img/touch/ms-touch-icon-144x144-precomposed.png"/>
	<meta name="msapplication-TileColor" content="#00396b"/>


	<!-- Begin Joomla Head -->	
		
	<jdoc:include type="head" />

	<!-- End Joomla Head -->

	<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Titillium+Web:200' rel='stylesheet' type='text/css'>
 
	<link rel="stylesheet"  href="templates/playaresorts/css/social.css">
	<link rel="stylesheet"  href="templates/playaresorts/css/owl.carousel.css" />
	<link rel="stylesheet"  href="templates/playaresorts/css/styles.css" />
	<link rel="stylesheet"  href="templates/playaresorts/form/cssformulario.css" />
		
	<!-- ACTIVADOR DE JAVA SCRIPT  -->
	<script src="https://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script src="templates/playaresorts/js/lib/jquery-1.10.2.min.js"></script>
	<script src="templates/playaresorts/js/lib/jquery-ui-1.10.3.custom.min.js"></script>
    <!-- FIN DEL ACTIVADOR DE JAVA SCRIPT -->	
  
    <!- Countdown -->
	<script src="templates/playaresorts/js/countdown.js"></script>

	<script type="text/javascript">

	jQuery( document ).ready(function($) {
	  
							$('a.btn').click(function(e){
								e.preventDefault();
								volver  = $(this).attr('href');
								$('html, body').animate({
									scrollTop: $(volver).offset().top
								}, 2000); 
							});  
	});
	</script>

	
 </head>

<body>	
	<div id="fb-root"></div>	
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=249749028379594&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>  	

	<nav class="navbar navbar-fixed-top" role="navigation"><!-- /.navbar INDICA INICIO DEL HEADER DEL SITIO --> 
	
		  <jdoc:include type="modules" name="HeaderBuscador" /> <!-- INDICA MODULO DEL BUSCADOR DEL HEADER -->
		  <div id="header">
			<div class="container-fluid">
				<jdoc:include type="modules" name="HeaderLogo" /> <!-- INDICA EL MODULO LOGO DEL HEADER -->
				<div class="collapse navbar-collapse">
					<div class="nav navbar-nav navbar-right">
						<jdoc:include type="modules" name="HeaderMenu" /> <!-- INDICA LOS MODULOS CONTACTO & MENU DEL HEADER -->
						<jdoc:include type="modules" name="MegaMenu" />
					</div>
				</div>
			</div>
		  </div>
		  <div id="resorts-nav" class="hidden-xs" style="display: none;">
			<jdoc:include type="modules" name="HeaderSubmenu" />  <!-- INDICA EL MODULO SUBMENU DEL HEADER -->
		  </div>
		  
	</nav><!-- /.navbar INDICA FIN DEL HEADER DEL SITIO -->


<div class="top-body-wrapper">

		<div id="home-slideshow">
			<jdoc:include type="modules" name="Slideshow" />
		</div>

	
	<div id="feature-carousel" class="carousel slide" data-ride="carousel" ><!-- /.carousel INDICA EL CARUSEL DEL SITIO -->	 
		<jdoc:include type="modules" name="SliderChat" /> <!-- INDICA MUDULO DE CHAT DEL SLIDER -->	 

		<ol class="carousel-indicators">
		
		</ol>
		
		<div class="carousel-inner">
			<jdoc:include type="modules" name="SliderFoto" /> <!-- INDICA MUDULOS DE FOTOS DEL SLIDER --> 
		</div>
			<jdoc:include type="modules" name="SliderControlPrevNext" /> <!-- INDICA MUDULO DE CONTROLOS NEXT & PREV DEL SLIDER HOME -->
	</div><!-- /.carousel INDICA EL CARUSEL DEL SITIO -->	



	
	<div  class="null"><!--#resort INDICA LA ESTRUCTURA HTLM MODIFICADA PARA LAS PAGINAS INTERMEDIAS -->		
	
	
		<div class="container-fluid" id="fluid1">
			<div class="row-fluid">
			
				<div class="heading">
					<jdoc:include type="modules" name="HeaderResorLogo" />
					<div class="resort-nav col-sm-9">	
						<jdoc:include type="modules" name="HeaderResortMenu" />	
					</div>
				</div>
				
				<!-- INICIO DE ESTRUCTURA PARA POSICIONES RIGHT -->
				<div class="sidebar col-sm-3 col-sm-push-9"> 
				
					<jdoc:include type="modules" name="RightContador" />		
					<div id="reservations-wrapper">	  			
						<jdoc:include type="modules" name="RightModulos" />					
					</div><!-- #reservations -->	
					<jdoc:include type="modules" name="RightFormulario" />	
					
					<!--<jdoc:include type="modules" name="Rightbodas" />--> <!-- posicion para borrar despues -->	
					
				</div> 
				<!-- FIN DE ESTRUCTURA PARA POSICIONES RIGHT -->

				
				
				<div class="content col-sm-9 col-sm-pull-3">
					<!-- INICIO DE LA POSICION PARA REDES SOCIALES EN HOME  -->	
					<jdoc:include type="modules" name="LeftSocial" />
					<!-- INICIO DE LA POSICION PARA REDES SOCIALES EN HOME  -->
										
					<!-- INICIO DEL COMPONENTE PARA LOS ARTICULOS DE LAS PAGINAS  -->	
					<jdoc:include type="component" />
					<!-- FIN DEL COMPONENTE PARA LOS ARTICULOS DE LAS PAGINAS -->

					<!-- INICIO DE POSICION PARA FORMULARIOS -->		
					<jdoc:include type="modules" name="Formularios" />
					<!-- FIN DE POSICION PARA FORMULARIOS -->	
					
					<!-- INICIO DE POSICION PARA LA LISTA DE MUDULOS DE SUITE -->		
					<jdoc:include type="modules" name="LeftItemSuites" />
					<!-- FIN DE POSICION PARA LA LISTA DE MUDULOS DE SUITE -->		
										
					
					
					<!-- INICIO DE POSICION PARA LOS SNAPSHOT DE CADA HOME DE INTERMEDIAS -->					
					<jdoc:include type="modules" name="LeftCallout" />
					<!-- FIN DE POSICION PARA LOS SNAPSHOT DE CADA HOME DE INTERMEDIAS -->
					
					
					<!-- INICIO DE BLOCK PARA EL CONTENIDO TOUR DE CADA HOME DE INTERMEDIAS -->	
					<div class="resort-tour">
						<jdoc:include type="modules" name="LeftTour" /> <!-- POSICION PARA LOS MODULOS RELACIONADOS CON TOURS -->	
					</div>
					<!-- FIN DE BLOCK PARA EL CONTENIDO TOUR DE CADA HOME DE INTERMEDIAS -->	
					
					
					<!-- INIICO DE ROTADORGALERIA PARA LA PAGINA DE HOME -->	
					<div class="resorts owl-carousel">
						<jdoc:include type="modules" name="LeftRotador" /> <!-- POSICION PARA LOS MODULOS DEL ROTADOR 2 DEL HOME -->
					</div>	 
					<!-- FIN DE ROTADORGALERIA PARA LA PAGINA DE HOME -->	
					
					
					
					<!-- INICIO DEL ROTADORGALERIA PARA LA PAGINA DE GALERIA -->
					<div class="gallery owl-carousel">
						<jdoc:include type="modules" name="RotadorGaleria" /> <!-- POSICION PARA LOS MODULOS DEL ROTADOR DE GALERIA -->
					</div>
					<!-- FIN DEL ROTADORGALERIA PARA LA PAGINA DE GALERIA -->
					
					
					<!-- INICIO DE POSICION PARA LIST RESORT-->					
					<jdoc:include type="modules" name="listResort" />					
					<!-- FIN DE POSICION PARA LIST RESORT-->

					<!--Below Content-->					
					<jdoc:include type="modules" name="BelowContent" />					
					<!-- END Below Content-->
					
					
				</div>		
			</div>	
		</div><!-- .container-fluid -->
		
		
		
	</div><!--#resort INDICA LA ESTRUCTURA HTLM MODIFICADA PARA LAS PAGINAS INTERMEDIAS -->	


</div> <!--#END top body wrapper-->


	<div id="slide-float">
		<div class="container-fluid">
			<div class="row-fluid">		
				<jdoc:include type="modules" name="LeftModulos" />		
				<div class="sidebar col-sm-3">
					<jdoc:include type="modules" name="RightModulos2" />			
				</div>		
			</div>	
		</div><!-- .container-fluid -->	
	</div>



	<div class="fluid">
		<div class="row-fluid">		
			<div id="full-width-bottom" class="">
				<jdoc:include type="modules" name="FullWidthBottom" />	<!-- POSICION PARA EL 3 ROTADOR QUE ESTA ARRIBA DEL FOOTER EN EL HOME -->		
			</div>		
		</div>	
	</div><!-- .container-fluid -->	


<div class="bottom-body-wrapper">
	
	
	<div class="container-fluid">
		<div class="row-fluid">		
			<div id="deals-carousel" class="owl-carousel">
				<jdoc:include type="modules" name="Rotador" />	<!-- POSICION PARA EL 3 ROTADOR QUE ESTA ARRIBA DEL FOOTER EN EL HOME -->		
			</div>		
		</div>	
	</div><!-- .container-fluid -->	
 
	<div class="container-fluid">
		<div class="row-fluid">		
			<div id="main-bottom" class="wrapper">
				<h4>Lining the Finest Shores of the Caribbean<br />Lie The Worlds Most Magnificent Resorts</h4>
				<jdoc:include type="modules" name="MainBottom" />
			</div>		
		</div>	
	</div><!-- .container-fluid -->	


</div> <!-- END bottom body wrapper -->

	<footer>
	<div class="container-fluid">
			<div class="row-fluid">			
			<div class="col-sm-3">
				<h3>Book A Vacation</h3>
				<ul>
					<li><a href="#">Book Online</a></li>
					<li><a href="#">Get a Price Quote</a></li>
					<li><a href="#">View Specials</a></li>
					<li><a href="#">Request a Brochure</a></li>
					<li><a href="#">Find a Travel Agent</a></li>
				</ul>
			</div>
			<div class="col-sm-3">
				<h3>The Resorts</h3>
					<ul>
						<li><a href="/jamaica">Jamaica Hotels</a></li>
							<ul>
								<li><a href="#">Hyatt Zilara</a></li>
								<li><a href="#">Hyatt Ziva</a></li>
							</ul>
						<li><a href="/mexico">Mexico Hotels</a></li>
							<ul>
								<li><a href="#">Gran Caribe</a></li>
								<li><a href="#">Hyatt Zilara</a></li>
								<li><a href="#">Hyatt Ziva</a></li>
								<li><a href="#">The Royal</a></li>
								<li><a href="#">Gran Porto</a></li>
							</ul>			
						<li><a href="#">View Resort Photos</a></li>
					</ul>
			</div>
			<div class="col-sm-3">
				<h3>Wedding &amp; Honeymoons</h3>
					<ul>
						<li><a href="#">Weddings</a></li>
							<ul>
								<li><a href="#">Mexico</a></li>
								<li><a href="#">Jamaica</a></li>
							</ul>	
						<li><a href="#">Honeymoons</a></li>				
						<li><a href="#">Renew Your Vows</a></li>
						<li><a href="#">Wedding Groups</a></li>
					</ul>
			</div>		
			<div class="col-sm-3">
				<h3>About Playa</h3>
					<ul>
						<li><a href="#">About Us</a></li>							
						<li><a href="#">Careers</a></li>
						<li><a href="#">Cookies & Privacy Policy</a></li>
						<li><a href="#">Our Resort Family</a></li>		
						<li><a href="#">Investors</a></li>
						</ul>
			</div>	
		</div>
	</div>


			
	<div class="container-fluid">
	  <div class="row-fluid">	  
		<jdoc:include type="modules" name="FooterModulosTop" /> <!-- POSICION PARA MODULOS DE FORMULARIO Y REDES SOCIALES DEL FOOTER --> 	  
	  </div>
	</div>
	<div class="container-fluid">
	  <div class="row-fluid bottom-copyright">	
		<p><jdoc:include type="modules" name="FooterMenu" /></p>	  <!-- POSICION PARA MENU DEL FOOTER --> 
		<jdoc:include type="modules" name="FooterCopyRight" /> <!-- POSICION PARA COPYRIGHT DEL FOOTER --> 	  
	  </div>
	</div>
 		


	</footer>  

		<script src="templates/playaresorts/js/bootstrap/collapse.js"></script>   
		<script src="templates/playaresorts/js/bootstrap/carousel.js"></script>  
		<script src="templates/playaresorts/js/bootstrap/dropdown.js"></script>
		<script src="templates/playaresorts/js/lib/owl.carousel.js"></script>
		<script src="templates/playaresorts/js/lib/jquery.countdown.js"></script>
		<script src="templates/playaresorts/form/formulario.js"></script>
		<script src="templates/playaresorts/js/main.js"></script>  
		<script src="templates/playaresorts/js/gallery.js"></script>
		<script src="templates/playaresorts/js/homepage.js"></script> 
		<script src="templates/playaresorts/js/funciones.js"></script>			
	    <script type="text/javascript">
		  function loadPageVar (sVar, sParams) {   // MDN xD
			  return decodeURI(sParams.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
		  }
		  function changeAf() {
			  var currentHostName = window.location.hostname.toLowerCase();
			  var newID = loadPageVar("af", window.location.search);
			  if(newID) {
				  $("input[type=hidden]").filter(function() {return this.name.toLowerCase() == 'af'}).val(newID);
				  $("a[href]").each(function(index, element) {
					  var url = $(element).attr("href");
					  var oldID = loadPageVar("af", element.search);
					  if (oldID) {
						  $(element).attr("href",url.replace("="+oldID,"="+newID));
					  }
					  var linkHostName = element.hostname.toLowerCase();
					  if (linkHostName == currentHostName) {
						  linkHref = $(element).attr("href");
						  if ( linkHref.indexOf("?") == -1 ) {
							  linkHref = linkHref + "?af=" + newID;
						  }
						  else {
							  linkHref = linkHref.replace("?","?af=" + newID + "&");
						  }
						  $(element).attr("href",linkHref);
					  }
				  });
			  }
		  }
		  $(function(){
			  changeAf();
		  });
	  </script>			
	
	
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script> 
  </body>
</html>