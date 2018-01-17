function peticionGet() {
    $.get("ajax.json", function (datos) {
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

function limpiaResultados() {
    $("#resultados").html("");
}

function peticionGetJson() {
    limpiaResultados();
    $("#resultados").html("<h1>Cargando</h1>");
    $.getJSON("ajax.json", function (result) {
            console.log("entro en success");
            limpiaResultados();
        console.log(result);
            $.each(result, function (i, field) {
                $("#resultados").append("<p>" + field.nombre + ":"+field.diputados+"</p>");
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
    $.post("ajax.php",{"nombre":"valor","pass":"mipassword"} ,function (datos) {
            console.log("success");
            $("#resultados").html(datos);
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
function init() {
    console.log("DOM Cargado Jquery");
    $("#getButton").click(peticionGet);
    $("#getJsonButton").click(peticionGetJson);
    $("#postButton").click(peticionPost);
    $("#postJsonButton").click(peticionPostJson);
}

$("document").ready(init);
