function init(){
    //Aquí ya se sabe que se ha cargado
    console.log("DOM Cargado Jquery");
    //buscar por etiqueta
    $("h1").hide();
    //por comparar con JS standart
    var arrayH1=document.getElementsByTagName("h1");
    console.log(arrayH1);
    for (i in arrayH1){
        var elemento=arrayH1[i];
        elemento.style="display:none;";
    }
    //cambio CSS por JQuery
    //por etiqueta
    $("h1").css("display","block");
    $("h1,h2").css("display","block");
    //buscar por identificativo
    $("#main_menu").css("background-color","green");
    //buscar por clase
    $(".logo").css("background-color","black");
    //buscar por descendiente
    $("p a").css("color","red");
    //buscar por hijo directo
    $("p > a").css("color","blue");
    //incluya un atributo
    $("a[href]").css("background-color","black");
    //por valor de un atributo
    $("a[href='#']").css("color","green");
    //por posición
    $("#listado li").css("color","red");
    //impares
    $("#listado li:odd").css("color","grey");
    //pares
    $("#listado li:even").css("color","yellow");
    //primero
    $("#listado li:first").css("color","blue");
    //último
    $("#listado li:last").css("color","green");
    //enésimo
    $("#listado li:nth-child(3)").css("color","green");
    //enésimo empezando por el final
    $("#listado li:nth-last-child(2)").css("color","green");
    //posición mayor que o menor que
    $("tr:gt(5)").css("background-color", "yellow");
    $("tr:lt(2)").css("background-color", "yellow");
    //buscar los ocultos
    $(":hidden").show();
}

$("document").ready(init);
