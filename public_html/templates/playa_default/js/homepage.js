jQuery(function($) {

  $('a.close-callout').on('click', function(e) {
      e.preventDefault();
      $('.special-callout').fadeOut();
  });    

  $('#deals-carousel').owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      navigation: true,
      itemsScaleUp : false,
      navigationText : ['<span class="glyphicon glyphicon-chevron-left"></span>', '<span class="glyphicon glyphicon-chevron-right"></span>'],
      pagination : false
  });

  $('.resorts.owl-carousel').owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      navigation: true,
      itemsScaleUp : false,
      navigationText : ['<span class="glyphicon glyphicon-chevron-left"></span>', '<span class="glyphicon glyphicon-chevron-right"></span>'],
      pagination : true
  });
  
 						var cantidad = $(".carousel-inner .custom").length;
/*  						if( cantidad == 1 ){
							$(".carousel-inner .custom").addClass("active");
							//$(".carousel-indicators .indicador0").css("display","none");
						}  */
							for(var i=0; i<cantidad; i++) {								
								$(".carousel-indicators").append("<li data-target='#feature-carousel' data-slide-to=" + i +" class=indicador"+ i + " ></li>")
								//$(".carousel-inner .item" + i).addClass("numero" + i );								
							}	 
						
						$(".carousel-indicators .indicador0").addClass("active");  	 	
						
						
						var estilo = $("#reservations-wrapper div").length;
						if(estilo == 0){
								$("#reservations-wrapper").css("border","none");					
						}
						
						
				
						
});
