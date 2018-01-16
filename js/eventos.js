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
    $("#b1").bind("click",function (){
        console.log("Click molón!"); 
    });
    $("#b1").unbind("click",botonPulsado);
    $("#b1").unbind("click");
    $("#login").submit(gestionaFormulario)
}
$(document).ready(init);