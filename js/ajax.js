function presentaDatos(codigoHTML){
    
            console.log("success");
            $("#resultados").html(codigoHTML);
    
}

function peticionGet() {
   $.get("ajax-parcial.html",
          //success function
          presentaDatos)
       .done(function () {
            console.log("second success");
        })
       .fail(
            function (jqXHR, textStatus, errorThrown) {
                console.log("error " + textStatus);
                console.log("incoming Text " + jqXHR.responseText);
                console.log("error " + errorThrown);
            }
        )
        .always(function () {
            console.log("finished");
        });
}

function limpiaResultados() {
    $("#resultados").html("");
}

function peticionGetJson() {
    limpiaResultados();
    $("#resultados").html("<h1>Cargando</h1>");
        $.getJSON("ajax.json", 
            function (resultados) {
            console.log("entro en success");
            limpiaResultados();
            console.log(resultados);
                /*
                for (i in resultados){
                    var resultado=resultados[i];
                }
                */
                $.each(resultados, function (i, resultado) {
                    $("#resultados").append("<p>" + resultado.nombre + ":"+resultado.diputados+"</p>");
                });
            })
            .done(function () {
                console.log("second success");
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log("error " + textStatus);
                console.log("incoming Text " + jqXHR.responseText);
                console.log("error " + errorThrown);
                }
            )
            .always(function () {
                console.log("complete");
            });
    
}
function peticionPost(){
    $.post("formularios.php",
        {
            "nombre":"pepe",
            "pass":"mipassword"
        } ,
    function (datos) {
            console.log("success");
            $("#resultados").html(datos);
        })
        .done(function () {
            console.log("second success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("finished");
        });
}
function peticionPostJson(){
    $.post(
        "ajax.php",
        JSON.stringify(
            {
                "nombre":"pepe",
                "pass":"mipassword"
            } 
        ),
        function (datos) {
            console.log("success");
            console.log(datos);
            $("#resultados").html("<p>nombre:"+datos.nombre+"</p>");
        },
        "json")
        .done(function () {
            console.log("second success");
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);
        console.log("error " + errorThrown);
        })
        .always(function () {
            console.log("finished");
        });
}

function cogeEstablecimientos(){
    $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001",
        function(datos){
            console.log(datos); 
            $("#resultados").html("");
            $.each(datos,function(posicion,dato){    
                $("#resultados").append("<p>"+dato.agentfirstname+" regenta "+dato.entityname+"</p>");
            });
        })
        .fail(function () {
            console.log("error");
        })
    ;
}
function jsonCallback(json){
  console.log(json);
    $("#resultados").html("");
    $.each(json,function(i,dato){
        console.log(dato);
       $("#resultados").append("<p>"+dato.documentName+": "+dato.locality+"</p>"); 
    });
}


function cogeEventos(){
    $.ajax({
        url:"http://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/alojamientos_rurales_euskadi/opendata/alojamientos.json",
        type:"GET",
        cache:false,
        jsonp: false,
        dataType:"jsonp",
        //jsonpCallback: "receive",
        async: false,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
         console.log(textStatus, errorThrown);
        }
    }); 
}
function init() {
    console.log("DOM Cargado Jquery");
    $("#getButton").click(peticionGet);
    $("#getJsonButton").click(peticionGetJson);
    $("#postButton").click(peticionPost);
    $("#postJsonButton").click(peticionPostJson);
    $("#cogeEventos").click(cogeEventos);
    $("#establecimientos").click(cogeEstablecimientos);
}

$("document").ready(init);
