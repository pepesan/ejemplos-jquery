function init(){
    console.log("DOM Cargado Jquery");
    //modificando el contenido de un elemento (div)
    $( "#log" ).html( "Contenido Cambiado");
}

$("document").ready(init);
