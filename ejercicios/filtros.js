/*
1. Crea un fichero filtros.html e incluye Jquery

2. Incluye 3 listados desordenado de 10 elementos de texto cada uno

3. Haz que el tercer elemento del primer listado tenga el fondo amarillo
*/
function init(){
    console.log("Dom cargado");
    //$("ul:first li:nth-child(3)").css("background-color","yellow");
    $("ul:first li").eq(2).css("background-color","yellow");
    /*
4. Haz que el cuarto elemento del primer listado tenga el fondo amarillo, pero seleccionando primero el tercer elemento
*/
    $("ul:first li").eq(2).next().css("background-color","yellow");
    /*

5. Haz que el primer ul tenga un id pero entrando desde el tercer elemento
*/
    $("ul:first li").eq(2).parent().attr("id","primero");
    /*

6. Haz que en el segundo listado todos los elementos tengan un fondo rojo pero entrando desde el primer elemento
*/
    $("body ul:nth-child(3) li:first").parent().children().css("background-color","red");
    //$("ul:eq(1) li:first").parent().children().css("background-color","red");
}
$(document).ready(init);


