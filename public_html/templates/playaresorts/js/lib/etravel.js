(function ($) {
 $(document).ready(function() {
    var isMobile = false;
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))isMobile=true})(navigator.userAgent||navigator.vendor||window.opera,'http://detectmobilebrowser.com/mobile'); 
	if(isMobile == true){
			jQuery("#formahotel input[name=Af], #formapackage input[name=Af]").val("MHREALUS");
		}else{
			jQuery("#formahotel input[name=Af], #formapackage input[name=Af]").val("HREALUS");
		} 

	$( ".etWtabs #RadioHotel" ).on( "click", function() { jQuery(".etWforms #formahotel").show(); jQuery(".etWforms #formapackage").hide(); });	 
	$( ".etWtabs #RadioHotelAvion" ).on( "click", function() { jQuery(".etWforms #formahotel").hide(); jQuery(".etWforms #formapackage").show(); }); 	 
     //Configuraciones generales para los calendarios

     if ($("#formahotel").length === 1) DefVar("#formahotel");
     else DefVar("#formapackage");

     // Se crea evento para ejecutar funciones despues que muestra el calendario
     $.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
     $.datepicker._updateDatepicker = function(inst) {
         $.datepicker._updateDatepicker_original(inst);
         var afterShow = this._get(inst, 'afterShow');
         if (afterShow)
             afterShow.apply((inst.input ? inst.input[0] : null)); // trigger custom callback
     }

     $(".EtDateFromGN").datepicker({
        dateFormat: FormatO,
		showOn: "both",
		buttonText: "",
        buttonImageOnly: true,
         numberOfMonths: isMobile ? 1 : 2,
         showButtonPanel: true,
         minDate: 0,
         maxDate: "+1y",
         beforeShowDay: RangoDias,
         beforeShow: function(input, ins) {
             if ($(input).data("oldDate") == undefined) $(input).data("oldDate", input.value)
         },
         onClose: showNextCalendar,
         onSelect: OnSelectDate
     });
     $(".EtDateToGN").datepicker({
        dateFormat: FormatO,
		showOn: "both",
		buttonText: "",
        buttonImageOnly: true,
         numberOfMonths: isMobile ? 1 : 2,
         showButtonPanel: true,
         minDate: +1,
         maxDate: "+1y +1d",
         beforeShowDay: RangoDias,
         afterShow: NumeroNoches,
         beforeShow: function() {
             var form = $(this).parents("form");
             var fromDate = form.find(".EtDateFromGN").datepicker("getDate");
             return {
                 "maxDate": addDate(fromDate, eTMaxDays, 'd')
             };
         },
         onSelect: OnSelectDate
     });
     DefaultDate();

     //Muestra numero de noches
     $("body").on("mouseenter", "#ui-datepicker-div td a", NumeroNochesHover);
     $("body").on("mouseleave", "#ui-datepicker-div td a", function() {
         
             $(".Noches").text(noches + " " + Nighttext);

     });

     /*Termina Calendarios*/
     ResetAll();

     // Pasa el valor del select al span
     $(".etWContainer").find(".etWSelect select").change(function() {
         $(this).next("span").text($(this).find("option:selected").text());
     }).change(); // para que lo ejecute cuando se cargue la pagina


     // Config de form hoteles
     if ($("#formahotel").length === 1) {
         $('#formahotel').submit(function(e) {
             var v1 = ValidateHotel('formahotel', 'EtDestinyHtl', MsjDestinO, AltMsjDestinO);
             if (v1) {
                 cleanSubmit(this);
                 /*TagManager
                    //Se retrasa el submit para que se registre el evento en tagmanager
                    e.preventDefault();
                    var that=this;
                    setTimeout(function(){ that.submit() },250);
                
                */
                 return true;
             }
             return false;


         });
         $("#formahotel .EtDateFromGN").datepicker("option", "maxDate", "+18m");

         $("#formahotel .rm select").change(function() { changeRoom('#formahotel', '') });
         $("#Room1 select[name=ch1]").change(function() { setAgeC(1, '') });
         $("#Age1 select").change(function() { setAgeCI('', 1) });
         $("#Room2 select[name=ch2]").change(function() { setAgeC(2, '') });
         $("#Age2 select").change(function() { setAgeCI('', 2) });
         $("#Room3 select[name=ch3]").change(function() { setAgeC(3, '') });
         $("#Age3 select").change(function() { setAgeCI('', 3) });		 
		 
 		jQuery("#EtHt").change(function(){
			jQuery("#Etdt").val(jQuery(this).find('option:selected').attr('ds'));
			if(jQuery(this).val()==1209 || jQuery(this).val()==487 || jQuery(this).val()==3871 ){ 
				jQuery("#formahotel .etWrow .etWRoom .ninos, #formahotel .etWrow .etWheader .chil").hide();
				jQuery("select[name*='ch']").val(0).change();
			}else{ jQuery("#formahotel .etWrow .etWRoom .ninos, #formahotel .etWrow .etWheader .chil").show();}							
		});				 

     }
	 
	 
	 
     // Config de form paquetes
     if ($("#formapackage").length === 1) {
         $("#formapackage .EtDateFromGN").datepicker("option", "maxDate", "+319d");
         $("#formapackage").submit(function(e) {
             var v1 = ValidateFLPK('formapackage', 'ni');
             var v2 = restrictPack6People();
             if (v1 && v2) {
                 cleanSubmit(this);
                 /*TagManager
                    //Se retrasa el submit para que se registre el evento en tagmanager
                    e.preventDefault();
                    var that=this;
                    setTimeout(function(){ that.submit() },250);
                
                */
                 return true;
             }
             return false;

         });
         $("#formapackage .rm select").change(function() { changeRoom('#formapackage', 'Pk') });
         $("#RoomPk1 select[name=ch1]").change(function() { setAgeC(1, 'Pk') });
         $("#AgePk1 select").change(function() { setAgeCI('Pk', 1) });
         $("#RoomPk2 select[name=ch2]").change(function() { setAgeC(2, 'Pk') });
         $("#AgePk2 select").change(function() { setAgeCI('Pk', 2) });
         $("#RoomPk3 select[name=ch3]").change(function() { setAgeC(3, 'Pk') });
         $("#AgePk3 select").change(function() { setAgeCI('Pk', 3) });
		 
         changeFocus("#EtCityOrig", MsjAirport);

         //Evitar que se realize el submit en este campo de origen
         $("#EtCityOrig").keypress(function(e) {
             if (e.which == 13) e.preventDefault()
         });

         //autocompletado origen paquetes
         $("#EtCityOrig").autocomplete({
             minLength: 3,
             source: function(request, response) {
                 if (request.term in cachePQ) {
                     response(cachePQ[request.term]);
                     return;
                 }
                 $.ajax({
                     url: "http://ajax.e-tsw.com/searchservices/getSearchJson.aspx",
                     dataType: "jsonp",
                     jsonpCallback: "ETSPaquetes",
                     data: {
                         Lenguaje: IDioMA,
                         ItemTypes: "A:10",
                         Filters: "",
                         PalabraBuscada: request.term
                     },
                     success: function(data) {
                         if (data.totalResultsCount == 0) {
                             data.results = [{
                                 Label: MsjNoResults,
                                 Type: null
                             }]; // Cuando no hay resultados agrega este item para que muestre el mensaje en el autocomplete
                         }
                         cachePQ[request.term] = data.results;
                         response(data.results);
                     }
                 });
             },
             select: function(event, ui) {
                 if (!ui.item.Type) {
                     $(this).val(""); // Cuando no hay resultados solo limpia la entrada
                     return false;
                 }
                 $("#EtCityOrig").val(ui.item.Label);
                 $("#EtIATAob").val(ui.item.TypeID);
                 inputText = ui.item.Label;
                 $("#EtCityOrig").blur();//Para que se limpie el input cuando se le de click
                 $("#EtDestinyPkl").focus();
                 return false;
             }
         }).data("ui-autocomplete")._renderItem = function(ul, item) {
             return $("<li>")
                 .data("item.autocomplete", item)
                 .append($("<a>").text(item.Label))
                 .appendTo(ul);
         };

 		jQuery("#EtHId").change(function(){
			jQuery("#EtdtPk").val(jQuery(this).find('option:selected').attr('ds'));
			jQuery("#EtIATds").val(jQuery(this).find('option:selected').attr('ib'));
			jQuery("#EtDestinyPkl").val(jQuery(this).find('option:selected').attr('dn'));
			if(jQuery(this).val()==1209 || jQuery(this).val()==487 || jQuery(this).val()==3871 ){ 
				jQuery("#formapackage .etWrow .etWRoom .ninos, #formapackage .etWrow .etWheader .chil").hide();
				jQuery("select[name*='ch']").val(0).change();
			}else{ jQuery("#formapackage .etWrow .etWRoom .ninos, #formapackage .etWrow .etWheader .chil").show();}				
		});					 

     }
     
     //Se activan estos inputs al salir de la pagina
     $(window).unload(function() {
         $(".etWContainer").find("[name*=ad],[name*=ac],[name*=ch]").prop("disabled", false)
     });
	 
    var preselect = {
        "": 0,
        "gran-caribe-cancun": 5,
        "hyatt-zilara-cancun": 1209,
        "hyatt-ziva-los-cabos": 522,
        "the-royal-playa-carmen": 487,
        "gran-porto-playa-del-carmen": 230,
        "hyatt-ziva-puerto-vallarta": 561,
        "hyatt-zilara-rose-hall": 3871,
        "hyatt-ziva-rose-hall":10241853               
    };	 
    var selected = preselect[window.location.pathname.toLowerCase().split("/")[1]];
    if (selected) jQuery("#EtHt, #EtHId").val(selected).change();
 });

 /*VARIABLES*/
 var MsjAirport, altMsjAirport, altMsjAirportr, altMsjDate, NFOrigen, NFDestino, PosadaAllIclusive, FalseHotel, FormatO, MsjAllInclusive, MsjHotel, Msj45Days, MsjMinTimeCar, MsjMaxTimeCar, IDioMA, MsjDestinO = {}, inicionoches = 0,noches = 0,inputText = "",eTMaxDays = 30;
 var cachePQ = {}, cacheDH = {}, cacheD = {};

 /*Funciones para los calendarios*/

 function DefVar(obj) {
     if ($(obj + " input[name=ln]").val().toUpperCase() == "ESP") {
         MsjDestinO = "Especifique una ciudad";
         AltMsjDestinO = "Por favor especifique una ciudad";
         MsjAirport = "Escriba el nombre de la ciudad";
         altMsjAirport = "Por favor seleccione un aeropuerto de origen.";
         altMsjAirportr = "Por favor seleccione un aeropuerto de llegada.";
         altMsjDate = "Debe Seleccionar una";
         NFOrigen = "Por favor seleccione un aeropuerto de origen.";
         NFDestino = "Por favor seleccione un aeropuerto de destino."
         PosadaAllIclusive = "Puede seleccionar como m\u00E1ximo 4 personas por habitaci\u00F3n.";
         FormatO = "dd/mm/yy";
         MsjAllInclusive = "M\u00E1ximo 4 personas por habitaci\u00F3n, incluyendo ni\u00F1os.";
         FalseHotel = "Nombre del hotel";
         MsjHotel = "Especifique un hotel por favor.";
         MsjMaxPeoplePack = "El n\u00famero m\u00e1ximo permitido por reservaci\u00f3n es de 6 personas, por favor corrija e intente nuevamente su b\u00fasqueda";
         MsjNoResults = "No se encontraron resultados";
         IDioMA = "esp";
         Nighttext = "Noches";
         msgSelectedDay = "Día de estancia";
         msgSelectedFrom = "Día de ida";
         msgSelectedTo = "Día de regreso";
     }
     if ($(obj + " input[name=ln]").val().toUpperCase() == "POR") {
         MsjDestinO = "Introduza uma cidade";
         AltMsjDestinO = "Por favor introduza uma cidade";
         MsjAirport = "Cidade ou Aeroporto";
         altMsjAirport = "Por favor seleccione um aeroporto de partida.";
         altMsjAirportr = "Por favor seleccione um aeroporto de chegada.";
         altMsjDate = "Vocꡤeve selecionar uma data";
         NFOrigen = "Digite o aeroporto de partida.";
         NFDestino = "Especificar Retorno aeroporto";
         PosadaAllIclusive = "Voc\u00EA deve selecionar at\u00E9 quatro pessoas por quarto.";
         FormatO = "dd/mm/yy";
         MsjAllInclusive = "M\u00E1ximo de 4 pessoas por quarto, incluindo crian\u00E7as.";
         FalseHotel = "Por favor, seleccione um hotel";
         MsjHotel = "Please select a hotel.";
        
         MsjMaxPeoplePack = "O n\u00famero m\u00e1ximo permitido por reserva \u00e9 de 6 pessoas, por favor, corrija e tente novamente a sua pesquisa";
         MsjNoResults = "Nenhum resultado foi encontrado";
         IDioMA = "por";
         Nighttext = "Noites";
         msgSelectedDay = "Dia de estadia";
         msgSelectedFrom = "Partida";
         msgSelectedTo = "Volta";

     }
     if ($(obj + " input[name=ln]").val().toUpperCase() == "ING") {
         MsjDestinO = "Enter a city";
         AltMsjDestinO = "Please enter a city";
         MsjAirport = "Enter the name of the city";
         altMsjAirport = "Please enter the name of the city.";
         altMsjAirportr = "Please select an arrival airport.";
         altMsjDate = "Please select a date";
         NFOrigen = "Enter the departure airport.";
         NFDestino = "Specify airport Return";
         PosadaAllIclusive = "You must select up to four people per room.";
         FormatO = "mm/dd/yy";
         MsjAllInclusive = "Maximum 4 persons per room, including children.";
         FalseHotel = "Hotel name";
         MsjHotel = "Please enter a hotel name";
         
         MsjMaxPeoplePack = "The maximum number allowed per reservation is 6 people, please correct and try your search again";
         MsjNoResults = "No results were found";
         IDioMA = "ing";
         Nighttext = "Nights";
         msgSelectedDay = "Day stay";
         msgSelectedFrom = "Departure";
         msgSelectedTo = "Return";
     }
 }

 function _normaliseDate(date) {
     if (date) {
         date.setHours(12, 0, 0, 0);
     }
     return date;
 }
 // Funcion para sumar Fechas

  function addDate(date, amount, period) {
        date = new Date(date);
        if (period == 'd' || period == 'w') {
            _normaliseDate(date);
            date.setDate(date.getDate() + amount * (period == 'w' ? 7 : 1));
        } else {
            var year = date.getFullYear() + (period == 'y' ? amount : 0);
            var month = date.getMonth() + (period == 'm' ? amount : 0);
            date.setTime(plugin.newDate(year, month + 1,
                Math.min(date.getDate(), this.daysInMonth(year, month + 1))).getTime());
        }
        return date;
    }

 function DefaultDate() {

     //Fechas Default en Calendarios
     var defaultDate = new Date(); // Obtiene la fecha 
     defaultDate = addDate(defaultDate, '+7', 'd'); // Le suma 7 días
     $(".EtDateFromGN").datepicker("setDate", defaultDate);
     defaultDate = addDate(defaultDate, '+4', 'd'); // Le suma 4 días
     $(".EtDateToGN").datepicker("setDate", defaultDate);
 }

 //Suma o resta fechas segun al calendario que se le da click

 function OnSelectDate(dateSel) {
     var formId = $(this).parents("form").attr('id');
     var dtClass = $(this).attr('class');
     var dateFromInput = $("#" + formId + " .EtDateFromGN");
     var dateToInput = $("#" + formId + " .EtDateToGN");
     var newdate, dateFrom, dateTo;

     //ESTA SECCIÓN IDENTIFICA A QUE CALENDARIO SE LE DA CLICK
     if (dtClass.indexOf('EtDateFromGN') >= 0) {
         dateFrom = $(this).datepicker("getDate");
         dateTo = dateToInput.datepicker("getDate");
         var daysDiff = Math.round((dateTo - dateFrom) / 864e5);
         newdate = addDate(dateFrom, '+1', 'd'); //Nueva fecha para el input EtDateToGN

         if (dateFrom >= dateTo || daysDiff > eTMaxDays)  {
            dateToInput.datepicker("option", "maxDate", null); // Se establece en null para habilitar todos los dias y poder poner la nueva fecha
            dateToInput.datepicker("setDate", newdate);
         } // Asignamos el nuevo valor al input EtDateToGN
        
     } else {
         dateFrom = dateFromInput.datepicker("getDate");
         dateTo = $(this).datepicker("getDate");
         newdate = addDate(dateTo, '-1', 'd'); //Nueva fecha para el input EtDateFromGN
         if ( dateTo <= dateFrom) {
             dateFromInput.datepicker("setDate", newdate);
         } // Asignamos el nuevo valor al input EtDateFromGN      
     }
 }

 function showNextCalendar(dateText, inst) {
     if ($(this).data("oldDate") != dateText) {
         $(this).data("oldDate", dateText);
         $(this).parents("form").find(".EtDateToGN").datepicker("show");
     }
 }

 // Asigna clases para el  sombreado del inicio y fin de una reservacion

 function RangoDias(date) {
     var clase = "";
     var titulo = "";
     var forma = $(this).parents("form").attr('id');
     var inicio = $('#' + forma + ' .EtDateFromGN').datepicker("getDate");
     var fin = $('#' + forma + ' .EtDateToGN').datepicker("getDate");
     //Se convierte todo a milisegundos
     date = date.getTime();
     inicio = inicio.getTime();
     if (fin == null) {
         fin = 0;
     } else {
         fin = fin.getTime();
     }
     //Se agregan las clases para la reservacion
     if (date > inicio && date < fin ) {
         clase = "selectedDay";
         titulo = msgSelectedDay;
     } else if (date == inicio) {
         clase = "selectedFrom";
         titulo = msgSelectedFrom;
     } else if (date == fin) {
         clase = "selectedTo";
         titulo = msgSelectedTo;
     }
     return [true, clase, titulo]
 }
 //Muestra numero de noches de las fechas seleccionadas

 function NumeroNoches(date) {
     $(".Noches").remove();

     var Formanoches = $(this).parents("form").attr('id');
         var fin = $('#' + Formanoches + ' .EtDateToGN').datepicker("getDate").getTime();
         inicionoches = $('#' + Formanoches + ' .EtDateFromGN').datepicker("getDate").getTime();

         noches = Math.round((fin - inicionoches) / 864e5);

         $(".ui-datepicker-close").before("<span class='Noches' >" + noches + " " + Nighttext + "</span>");

     /* Inicia Fix para la navegación de los meses */

     function fixMonthsNavigation() {
         if (!$.datepicker._lastInput)
             $.datepicker._lastInput = $.datepicker._curInst.input[0];
     }
     $(".ui-datepicker-next, .ui-datepicker-prev").off("mousedown", fixMonthsNavigation);
     $(".ui-datepicker-next, .ui-datepicker-prev").on("mousedown", fixMonthsNavigation);
     /* Termina Fix */
 }
 //Muestra numero de noches al pocisionar el mouse sobre un dia

 function NumeroNochesHover() {
         var datehover = $(this).parent().data(), //Se obtiene mes y año del dia seleccionado
             diahover = parseInt($(this).html());
         var fechahover = new Date(datehover.year, datehover.month, diahover);
         fechahover = fechahover.getTime();
         fechahover = Math.round((fechahover - inicionoches) / 864e5);

         if (fechahover > 0) {
             $(".Noches").text(fechahover + " " + Nighttext);
         } else {
             $(".Noches").text(noches + " " + Nighttext);
         }
 }

 function ValidateDate(forma) {
     if ($('#' + forma + ' .EtDateFromGN').val() == "" || $('#' + forma + ' .EtDateToGN').val() == "") {
         alert(altMsjDate);
         return (false);
     }
 }
 /*Termina Calendarios*/

 /*Funciones Generales */

 function ResetAll() {
     //Origen Destino
     $("#EtCityOrig").val(MsjAirport);
	 $("#EtHId, #EtHt").val(5).change();

     //Cuartos
     $("select[name='rm']").val(1).change();
     //Adultos
     $("select[name*='ad']").val(2).change();
     //Niños
     $("select[name*='ch']").val(0).change();
     //Formulario
     $("input[name='ob'],input[name='do'],input[name='pu'],input[name=ctf],input[name=ac1],input[name=ac2],input[name=ac3]").val('');

 }
 //Modificar el foco

 function changeFocus(obj, text) {
     $(obj).focus(function() {
         inputText = $(this).val();
         $(this).val("");
         $(this).autocomplete("search", "");
     });
     $(obj).blur(function() {
         $(this).val(inputText);
     });
 }

 //reinicia edad de los niños

 function restarAge(cuarto, suf) {
     $("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val(0).change();
     $("#Age" + suf + cuarto).hide();
     $("#Age" + suf + cuarto + ' .age-select select').val(0).change();
     $("#Et" + suf + "NumAges" + cuarto).val("");
     if (!(
         ($("#Room" + suf + '1 select[name=ch1]').length != 0 && $("#Room" + suf + '1 select[name=ch1]').val() != 0) ||
         ($("#Room" + suf + '2 select[name=ch2]').length != 0 && $("#Room" + suf + '2 select[name=ch2]').val() != 0) ||
         ($("#Room" + suf + '3 select[name=ch3]').length != 0 && $("#Room" + suf + '3 select[name=ch3]').val() != 0)
     )) {
         $("#Age" + suf + "C").hide();
     }
 }
 //Reinicia configuración de cuartos

 function restartRoom(forma, cuarto, suf) {
     $("#Room" + suf + cuarto).hide();
     restarAge(cuarto, suf);
 }
 //muestra cuartos

 function showRoom(forma, cuarto, suf) {
     $("#Room" + suf + cuarto).show();
 }
 //Funcion cambio cuartos

 function changeRoom(forma, suf) {
     if ($(forma + ' .rm select').val() == 1) {
         showRoom(forma, 1, suf);
         restartRoom(forma, 2, suf);
         restartRoom(forma, 3, suf);
     }
     if ($(forma + ' .rm select').val() == 2) {
         showRoom(forma, 1, suf);
         showRoom(forma, 2, suf);
         restartRoom(forma, 3, suf);
     }
     if ($(forma + ' .rm select').val() == 3) {
         showRoom(forma, 1, suf);
         showRoom(forma, 2, suf);
         showRoom(forma, 3, suf);
     }
 }
 //funcion asigna edad ninos

 function setAgeC(cuarto, suf) {
     if (
         ($("#Room" + suf + '1 select[name=ch1]').length != 0 && $("#Room" + suf + '1 select[name=ch1]').val() != 0) ||
         ($("#Room" + suf + '2 select[name=ch2]').length != 0 && $("#Room" + suf + '2 select[name=ch2]').val() != 0) ||
         ($("#Room" + suf + '3 select[name=ch3]').length != 0 && $("#Room" + suf + '3 select[name=ch3]').val() != 0)
     ) {
         $("#Age" + suf + "C").show();
     } else {
         $("#Age" + suf + "C").hide();
     }
     $("#Age" + suf + cuarto).show();
     if ($("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val() == 0) {
         $("#Age" + suf + cuarto).hide();
         $("#Et" + suf + "NumAges" + cuarto).val('');
     }
     if ($("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val() == 1) {
         $("#Age" + suf + cuarto + ' .age-select').hide();
         $("#Age" + suf + cuarto + ' .age-select select').val(0).change();
         $("#Age" + suf + cuarto + ' .ones').show();
         $("#Et" + suf + "NumAges" + cuarto).val('0');
     }
     if ($("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val() == 2) {
         $("#Age" + suf + cuarto + ' .age-select').val(0).hide();
         $("#Age" + suf + cuarto + ' .age-select select').val(0).change();
         $("#Age" + suf + cuarto + ' .ones').show();
         $("#Age" + suf + cuarto + ' .two').show();
         $("#Et" + suf + "NumAges" + cuarto).val('0,0');
     }
     if ($("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val() == 3) {
         $("#Age" + suf + cuarto + ' .age-select').val(0).hide();
         $("#Age" + suf + cuarto + ' .age-select select').val(0).change();
         $("#Age" + suf + cuarto + ' .ones').show();
         $("#Age" + suf + cuarto + ' .two').show();
         $("#Age" + suf + cuarto + ' .three').show();
         $("#Et" + suf + "NumAges" + cuarto).val('0,0,0');
     }
 }

 function setAgeCI(suf, cuarto) {
     if ($("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val() == 1) {
         $("#Et" + suf + "NumAges" + cuarto).val($('#Age' + suf + cuarto + ' .ones select').val());
     }
     if ($("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val() == 2) {
         $("#Et" + suf + "NumAges" + cuarto).val($('#Age' + suf + cuarto + ' .ones select').val() + ',' + $('#Age' + suf + cuarto + ' .two select').val());
     }
     if ($("#Room" + suf + cuarto + ' select[name=ch' + cuarto + ']').val() == 3) {
         $("#Et" + suf + "NumAges" + cuarto).val($('#Age' + suf + cuarto + ' .ones select').val() + ',' + $('#Age' + suf + cuarto + ' .two select').val() + ',' + $('#Age' + suf + cuarto + ' .three select').val());
     }
 }


function restrictFlight6People() {
     var ad1 = parseInt($("#formaflight select[name=ad1]").val());
     var ch1 = parseInt($("#formaflight select[name=ch1]").val());
     var sum = ad1 + ch1;
     if (sum > 6) {
         alert(MsjMaxPeoplePack);
         return false;
     }
     return true;
 }

 function restrictPack6People() {
     var rooms = parseInt($("#formapackage .rm select").val());
     var ad1 = parseInt($("#formapackage select[name=ad1]").val());
     var ad2 = parseInt($("#formapackage select[name=ad2]").val());
     var ad3 = parseInt($("#formapackage select[name=ad3]").val());
     var ch1 = parseInt($("#formapackage select[name=ch1]").val());
     var ch2 = parseInt($("#formapackage select[name=ch2]").val());
     var ch3 = parseInt($("#formapackage select[name=ch3]").val());
     var sum = ad1 + ch1;
     if (rooms > 1) {
         sum += ad2 + ch2
     }
     if (rooms > 2) {
         sum += ad3 + ch3
     }
     if (sum > 6) {
         alert(MsjMaxPeoplePack);
         return false;
     }
     return true;
 }
 //Validar vuelos y paquetes

 function ValidateFLPK(forma, objdestino) {
     if ($("#" + forma + " input[name=no]").val() == "" || $("#" + forma + " input[name=no]").val() == MsjAirport) {
         alert(altMsjAirport);
         return (false);
     }
     if ($("#" + forma + " input[name=" + objdestino + "]").val() == "" || $("#" + forma + " input[name=" + objdestino + "]").val() == MsjAirport) {
         alert(altMsjAirportr);
         return (false);
     }
     if (ValidateDate(forma) == false) {
         return (false);
     }
     return true;
 }
 //Valida hotel

 function ValidateHotel(forma, objdest, msjobjdest, altmsjobjdest) {
     if ($('#' + objdest).val() == '' || $('#' + objdest).val() == msjobjdest) {
         alert(altmsjobjdest);
         return (false);
     }
     if (ValidateDate(forma) == false) {
         return (false);
     }
     return true;
 }
 //Selecciona el numero de personas de acuerdo al numero de habitaciones

 function cleanSubmit(forma) {
     // Lee el número de habitaciones solicitadas
     var rm = parseInt($(forma).find("[name=rm]").val());

     // Deshabilita los adultos de las habitaciones que no se solicitaron
     $(forma).find("[name*=ad]").each(function(index, element) {
         var room = parseInt($(this).attr("name").replace("ad", ""));
         if (rm < room) {
             $(this).prop("disabled", true);
         }
     });
     // Deshabilita los niños de las habitaciones que no se solicitaron
     $(forma).find("[name*=ch]").each(function(index, element) {
         var room = parseInt($(this).attr("name").replace("ch", ""));
         if (rm < room) {
             $(this).prop("disabled", true);
         }
         // Lee la cantidad de niños para esta habitación y si es cero deshabilita sus edades
         var ch = parseInt($(forma).find("[name=ch" + room + "]").val())
         if (ch == 0) {
             $(forma).find("[name=ac" + room + "]").prop("disabled", true)
         }
     });
     // Deshabilita las edades de los niños de las habitaciones que no se solicitaron
     $(forma).find("[name*=ac]").each(function(index, element) {
         var room = parseInt($(this).attr("name").replace("ac", ""));
         if (rm < room) {
             $(this).prop("disabled", true);
         }
     });
 }
})(jQuery);