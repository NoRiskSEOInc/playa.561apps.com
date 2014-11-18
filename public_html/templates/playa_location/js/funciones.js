jQuery(document).ready(function($) {

			//SCRIPT 
			  $(".navbar-nav ul").removeClass("nav menu");
			  $(".navbar-nav li.item-117").addClass("hidden-xs");
			  $(".navbar-nav li.item-117 .resorts-nav-toggle").append("<span class='hidden-xs hidden-sm glyphicon glyphicon-chevron-down'></span>");
			   $(".navbar-nav .deeper").addClass("dropdown hidden-sm hidden-md hidden-lg open");
			   
			   $(".navbar-nav .deeper .dropdown-toggle").append("<span class='glyphicon glyphicon-chevron-down'></span>");
			   $(".navbar-nav .deeper .dropdown-toggle").attr("data-toggle","dropdown");
			   $(".navbar-nav .deeper ul").removeClass("nav-child unstyled small nav-pills resort-nav");
			   $(".navbar-nav .deeper ul").addClass("dropdown-menu");
			   $(".navbar-nav .deeper .dropdown-menu").attr("id","resorts-mobile-nav");
			   $(".navbar-nav .deeper .dropdown-menu").attr("role","menu");
			   $(".navbar-nav .deeper .dropdown-menu span").removeClass("nav-header");
			   $(".navbar-nav .deeper .dropdown-menu li.item-344, .navbar-nav .deeper .dropdown-menu li.item-353, .navbar-nav .deeper .dropdown-menu li.item-349, .navbar-nav .deeper .dropdown-menu li.item-356, .navbar-nav .deeper .dropdown-menu li.item-359").addClass("dropdown-header");
			   $(".navbar-nav .deeper .dropdown-menu li.item-344, .navbar-nav .deeper .dropdown-menu li.item-353, .navbar-nav .deeper .dropdown-menu li.item-349, .navbar-nav .deeper .dropdown-menu li.item-356, .navbar-nav .deeper .dropdown-menu li.item-359").attr("role","presentation");

			   
			  $("#resorts-nav ul").removeClass("nav menu");
			  $("#resorts-nav ul").addClass("container-fluid");					  
 			  $("#resorts-nav .container-fluid .deeper").addClass("location");
			  $("#resorts-nav .container-fluid .item-161 .nav-header, #resorts-nav .container-fluid .item-165 .nav-header, #resorts-nav .container-fluid .item-168 .nav-header, #resorts-nav .container-fluid .item-172 .nav-header").after("<h5>Mexico</h5>");
			  $("#resorts-nav .container-fluid .item-175 .nav-header").after("<h5>Jamaica</h5>");
			  $("#resorts-nav .location ul").removeClass("nav-child unstyled small container-fluid");

			  
			  
 					var URL=prueba();
					var URL1 =URL[1];
					var URL2 =URL[2];

						switch(URL1){
						case '':			
								$(".null .heading, #fluid1 .resort-tour, #fluid1 .gallery").remove();
								$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");									
						break						
						case 'about':									
								$(".null .heading").remove();	
								$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");
										
										var bodas = window.location.pathname.split("/")
										console.long(bodas);
						break						
												
						case 'weddings':									
								$(".null .heading").remove();	
								$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");								
						break			
						case 'hot-deals':									
								$(".null .heading").remove();
								$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");								
								$("#fluid1 .row-fluid .content .deal").after("<hr>");
						break
						case 'groups':									
								$(".null .heading").remove();	
								$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");								
						break							
						case 'contact-us':									
								$(".null .heading").remove();	
								$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");								
						break	
						
						case 'gran-caribe-cancun':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 	
								$("#feature-carousel .carousel-indicators, #fluid2").remove();																
						break							
						case 'hyatt-zilara-cancun':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 		
								$("#feature-carousel .carousel-indicators, #fluid2").remove();
						break				
						case 'hyatt-zilara-rose-hall':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
								$("#feature-carousel .carousel-indicators, #fluid2").remove();									
						break							
						case 'hyatt-ziva-los-cabos':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
								$("#feature-carousel .carousel-indicators, #fluid2").remove();									
						break							
						case 'hyatt-ziva-rose-hall':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
								$("#feature-carousel .carousel-indicators, #fluid2").remove();									
						break						
						case 'the-royal-playa-carmen':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
								$("#feature-carousel .carousel-indicators, #fluid2").remove();									
						break							
						case 'gran-porto-playa-del-carmen':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
								$("#feature-carousel .carousel-indicators, #fluid2").remove();									
						break						
						case 'hyatt-ziva-puerto-vallarta':		
								$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
								$("#feature-carousel .carousel-indicators, #fluid2").remove();									
						break																		
						default:
							
						}
						
						
						
						
						
						

						switch(URL2){
							case 'fall-in-to-winter-savings':									
									$(".null .heading").remove();																							
							break	
							case 'fall-into-winter-savings':									
									$(".null .heading").remove();																							
							break							
							case 'suites':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 				
									$("#resort #fluid1 .row-fluid .content .suite").after("<hr>");//scrip agrega HTML para separadores	
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																
							break	
							case 'dining':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2, #fluid1 .resort-tour, #fluid1 .owl-carousel").remove();		
									$("#resort #fluid1 .row-fluid .content .suite").after("<hr>");//scrip agrega HTML para separadores								
							break							
							case 'hot-deals':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 						
									$("#resort #fluid1 .row-fluid .content .deal").after("<hr>");
									$("#feature-carousel .carousel-indicators, #fluid2, #fluid1 .resort-tour, #fluid1 .owl-carousel").remove();
							break							
							case 'activities':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
									$("#feature-carousel .carousel-indicators, #fluid2").remove();	
									$("#resort #fluid1 .row-fluid .content .suite").after("<hr>")								
							break						
							case 'all-inclusive':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'resort-facilities':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 		
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'spa':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'meeting-facilities':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'online-check-in':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break						
							case 'kids-teens-facilities':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'weddings':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break										
							case 'photo-gallery':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias 
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'location':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'awards':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break								
							case 'videos':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break							
							case 'kids-and-teens-facilities':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break								
							case 'virtual-tour':		
									$(".null").attr("id","resort");//este script convierte la estructura HTML del Home para las intermedias
									$("#feature-carousel .carousel-indicators, #fluid2").remove();																	
							break	
					
							case 'hyatt-zilara-hyatt-ziva':		
									$(".null .heading,#fluid2").remove();
									$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");																
							break								
							case 'the-royal-playa-del-carmen':		
									$(".null .heading,#fluid2").remove();
									$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");									
							break								
							case 'the-grans':		
									$(".null .heading, #fluid2").remove();
									$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");									
							break								
							case 'not-your-parents-all-inclusive':		
									$(".null .heading, #fluid2").remove();
									$("#feature-carousel.carousel .carousel-inner").css("border-bottom","none");									
							break																			
							default:							
						}
		
						$("#resort .resort-nav ul").addClass("nav-pills resort-nav");																	
						$("#resort .resort-nav .deeper").addClass("dropdown");																							
						$("#resort .resort-nav .deeper .dropdown-toggle").attr("data-toggle","dropdown");																	
						$("#resort .resort-nav .deeper .dropdown-toggle").append("<span class='glyphicon glyphicon-chevron-down'></span>");								
						$("#resort .resort-nav .deeper ul").removeClass("nav-child unstyled small nav-pills resort-nav");						
						$("#resort .resort-nav .deeper ul").addClass("dropdown-menu");		
						$("#resort .resort-nav .deeper ul").attr("role","menu");							
						

});
			
				function prueba(){
					var URL = window.location.pathname.toLowerCase().split("/"); 
					URL.length;
					return (URL);
				} 
				
				
/* 				function rotador(){
					var cantidad = $(".carousel-inner .custom").length;
						for(var i=0; i<=cantidad; i++) {
							$(".carousel-indicators").append("<li data-target='#feature-carousel' data-slide-to=" + i +" class=''></li>")
						}							
				} */