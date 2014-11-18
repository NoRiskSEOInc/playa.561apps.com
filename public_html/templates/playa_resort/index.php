<?php
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/templates/header.php";
   include_once($path);
?>


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
				<h4>Lining the Finest Shores of the Caribbean</h4>
				<jdoc:include type="modules" name="MainBottom" />
			</div>		
		</div>	
	</div><!-- .container-fluid -->	


</div> <!-- END bottom body wrapper -->


<?php
   $path = $_SERVER['DOCUMENT_ROOT'];
   $path .= "/templates/footer.php";
   include_once($path);
?>

</body>
</html>