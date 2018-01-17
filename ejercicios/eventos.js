/*
1.- Crea un fichero eventos.html e incluye JQuery
*/
function pulsado(){
    console.log("Botón pulsado");
}
function cambiaBorde(){
    $("#otroboton").css("border","1px red solid");
    $(this).css("border","1px red solid");
}
function cambiaFondo(){
    $(this).css("background-color","green");
    //$("#tercerboton").css("background-color","green");
}
function muestraBlur(){
    console.log("blur");
}
function muestraFocus(){
    console.log("focus");
}
function gestionaLogin(evento){
    
    if($("#username").val()!="" &&
      $("#contra").val()!=""){
       //caso de que el formulario valide
       
    }else{
       //Caso de novalidación
       evento.preventDefault();
    }
}
function entrado(){
    console.log("ha entrado");
}
function salido(){
    console.log("ha salido");
}
function validaCampo(){
    if($("#campo").val()!=""){
        $("#campo").css("border","1px solid green");
    }else{
        $("#campo").css("border","1px solid red");
    }
}
function init(){
    console.log("Dom cargado");
    /*
2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla
*/
    $("#miboton").click(pulsado);
    
/*

3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón
*/
    $("#otroboton").click(cambiaBorde);
    
/*
3.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón
*/
    $("#tercerboton").click(cambiaFondo);
    /*
4.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola
5.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla
*/
    var campo=$("#campo");
    campo.focus(muestraFocus);
    campo.blur(muestraBlur);
    /*
6.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos
*/
    $("#login").submit(gestionaLogin);
    /*
7.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola
*/
    $("#b1").click(pulsado);
    /*
8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también

*/
    var enlace=$("#enlace");
    enlace.mouseover(entrado);
    enlace.mouseout(salido);
    /*
9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado
*/
    campo.blur(validaCampo);
    
}
$(document).ready(init);





