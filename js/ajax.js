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
        .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);
        console.log("error " + errorThrown);
        })
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
    $.getJSON("ajax.json", function (resultados) {
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
        }).done(function () {
            console.log("second success");
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("error " + textStatus);
        console.log("incoming Text " + jqXHR.responseText);
        console.log("error " + errorThrown);
        })
        .always(function () {
            console.log("complete");
        });
}
function peticionPost(){
    $.post("formularios.php",{"nombre":"valor","pass":"mipassword"} ,function (datos) {
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
    $.post("ajax.php",JSON.stringify({"nombre":"valor","pass":"mipassword"} ),function (datos) {
            console.log("success");
        console.log(datos);
            $("#resultados").html("<p>nombre:"+datos.nombre+"</p>");
        },"json")
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

function cogeEventosMadrid(){
    $.get("http://opendata.euskadi.eus/contenidos/ds_eventos/eventos_turisticos/opendata/agenda.json",function(datos){
       console.log(datos); 
    });
}

function init() {
    console.log("DOM Cargado Jquery");
    $("#getButton").click(peticionGet);
    $("#getJsonButton").click(peticionGetJson);
    $("#postButton").click(peticionPost);
    $("#postJsonButton").click(peticionPostJson);
    $("#eventosMadrid").click(cogeEventosMadrid);
}

$("document").ready(init);
