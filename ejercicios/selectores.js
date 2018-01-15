/*
Selecciones

1. Crea un proyecto donde poder resolver los ejercicios de esta unidad

2. Crea un selectores.html e incluye el fichero de jquery 

3. Haz que según se cargue la página saque un mensaje por consola
*/
function init(){
    console.log("Dom cargado");
    /*

    4.  Coloca dos párrafos en el HTML

    5. Haz que los dos párrafos tengan el fondo amarillo
    */
    $("p").css("background-color","yellow");
    /*

    6. Asigna una clase al primer párrafo y un identificativo al segundo, coloca un fondo de un color distinto al primer párrafo y al segundo, uno por la clase y otro por el id
    */
    $(".miclase").css("background-color","blue");
    $("#miparrafo").css("background-color","red");
    /*

    7. Coloca un par de enlaces en el HTML y haz que uno de ellos apunte a google, modifica el color de fondo del que apunta a google
    */
    $("a[href='http://google.es/']").css("background-color","blue");
    /*

    8. Coloca un listado desordenado de 10 elementos con un texto, haz que el primero tenga fondo rojo,  el último fondo azul y el 5º tenga fondo amarillo*/
    $("ul li:first").css("background-color","red");
    $("ul li:last").css("background-color","blue");
    $("ul li:nth-child(5)").css("background-color","yellow");
    /*

    9. Coloca en el HTML un formulario de login, haz que todos los input tengan un fondo azul
    */
    $("input").css("background-color","blue");
}
$(document).ready(init);




