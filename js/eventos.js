function botonPulsado(){
        console.log("me han pulsado");
}
function gestionaFormulario(evento){
        evento.preventDefault();
        console.log("enviando formulario");
}
function init(){
    console.log("Dom cargado");
    $("#b1").click(botonPulsado);
    $("#b1").on("click",function (){
        console.log("Click molón!"); 
    });
    $("#b1").off("click",botonPulsado);
    $("#b1").off("click");
    $("#login").submit(gestionaFormulario);
}
$(document).ready(init);
//document.addEventListener("DOMContentLoaded",init);