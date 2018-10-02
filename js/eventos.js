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
    // Para cancelar el uso de una función por evento
    $("#b1").off("click",botonPulsado);
    // quita todas la funcioens relacionadas con un evento concreto
    //$("#b1").off("click");

    $("#enlace").click(
        (evento)=>{
            evento.preventDefault();
            evento.stopPropagation();
            console.log("Enlace pulsado");
        }
    );
    //$("#login").submit(gestionaFormulario);
}
$(document).ready(init);
//document.addEventListener("DOMContentLoaded",init);