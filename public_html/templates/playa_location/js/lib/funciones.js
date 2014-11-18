$( document ).ready(function() {
			
			//SCRIPT 
			  $(".navbar-nav ul").removeClass("nav menu");
			  $(".navbar-nav li.item-117 .resorts-nav-toggle").append("<span class='hidden-xs hidden-sm glyphicon glyphicon-chevron-down'></span>");
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
								$(".null .heading").remove();																
						break						
						case 'about':									
								$(".null .heading").remove();																							
						break
						case 'gran-caribe-real':		
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
											
						case 'weddings':									
								$(".null .heading").remove();																							
						break			
						case 'hot-deals':									
								$(".null .heading").remove();																							
						break
						case 'groups':									
								$(".null .heading").remove();																							
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