/*
1. Crea un fichero dom.html e incluye Jquery
*/
function init(){
    console.log("dom cargado");
    /*
2. Incluye un párrafo en el html, y luego modifica el contenido del párrafo desde Jquery.
*/
    $("p#miparrafo").html("Texto cambiado");
    /*
3. Inserta otro párrafo al final del body con Jquery
*/
    $("body").append("<p class='miclase' id='ultimodelafila'>Otro párrafo</p>")
    /*
4. Inserta un párrafo entre los dos párrafos anteriores y colócale un texto con Jquery
*/
    $("p:last").before("<p>voy en medio</p>");
    //$("#miparrafo").after("<p>voy en medio</p>");
    /*
5. Modifica el color de fondo del último párrafo del HTML con Jquery
*/
    $("p:last").css("background-color","yellow");
    /*

6. Añade un id al último párrafo desde Jquery
*/
    $("p:last").attr("id","miiden");
    /*

7. Quita el id al último párrafo desde Jquery
*/
    $("p:last").removeAttr("id");
    /*

8. Asigna la clase rojo al último párrafo
*/
    $("p:last").addClass("rojo");
    /*

9. Imprime por consola las clases que tiene asignadas el último párrafo
*/
    console.log($("p:last").attr("class"));
    /*

10. Coloca un formulario de login en el HTML
11. Asigna un id al campo nombre
*/
    $("#username").attr("id","username");  
/*

12. imprime por consola el valor del campo nombre
*/
    console.log($("#username").val());
}
$(document).ready(init);









