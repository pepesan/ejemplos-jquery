function modificacionContenido(){
    //coger el valor del contenido
    var contenido=$("h1").html();
    console.log(contenido);
    //modificando el contenido de un elemento (div)
    $("h1").html("<span>Mi título nuevo</span>");
}
function cambiaActive(){
    $("button").toggleClass("active"); 
    $("div.tab").toggleClass("oculta");
}
function init(){
    console.log("DOM Cargado Jquery");
    modificacionContenido();
    //modificando los atributos
    $("h1").attr("id","mititulo");
    //coger valor de atributo
    var valor=$("h1").attr("id");
    console.log(valor);
    //borrar atributo
    $("h1").removeAttr("id");
    //añadir una clase
    $("p").addClass("roja");
    //quitar una clase
    $("p").removeClass("roja");
    //saber si una clase está añadida
    var valor=$("p").hasClass("roja");
    console.log(valor);
    //cambiar la presencia de la clase
    // si esta metida se saca 
    // si no está metida se mete
    $("p").toggleClass("roja");
    $("button").click(cambiaActive);
}

$("document").ready(init);
