



	<footer>
	<div class="container-fluid">
			<div class="row-fluid">			
			<div class="col-sm-3">
				<h3>Book A Vacation</h3>
				<ul>
					<li><a href="#book-online">Book Online</a></li>
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
	</div>dcdc
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
  