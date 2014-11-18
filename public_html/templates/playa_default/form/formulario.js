
var WRInitTime=(new Date()).getTime();

function Validar()
{ 
  var er_texto = /^([0-9]|[a-z]|[A-Z]|á|é|í|ó|ú|ñ|ü|\s|\.|-)+$/ //letras, '.' y '-' o vacio  

  if (document.formcontactus.Destination1.value == "Seleccion")
  { alert("Select a Destination Email From The List"); document.formcontactus.Destination1.focus(); return (false); }  

  if (!er_texto.test(document.formcontactus.Name.value))
  { alert("The Field Name is not valid"); document.formcontactus.Name.focus(); return (false); }

  if (document.formcontactus.Country.value == "Seleccion")
  { alert("Select a Country From The List"); document.formcontactus.Country.focus(); return (false); }   

  if (isNaN(document.formcontactus.Telephone.value) || document.formcontactus.Telephone.value == "")
  { alert("The Field Telephone is not valid"); document.formcontactus.Telephone.focus(); return (false); }
  
  if (document.formcontactus.Email.value.indexOf('@', 0) == -1 || document.formcontactus.Email.value.indexOf('.', 0) == -1)
  { alert("The Field E-Mail is not valid"); document.formcontactus.Email.focus(); return false; }
  
  if (!er_texto.test(document.formcontactus.Comments.value))
  { alert("The Field Comments is not valid"); document.formcontactus.Comments.focus(); return (false); }

  document.formcontactus.submit();
}

function RefreshImage(valImageId) {
	var objImage = document.images[valImageId];
	if (objImage == undefined) {
		return;
	}
	var now = new Date();
	objImage.src = objImage.src.split('?')[0] + '?x=' + now.toUTCString();
}