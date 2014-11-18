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
