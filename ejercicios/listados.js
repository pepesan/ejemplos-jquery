var app={
    resultados:[],
    init:function(){
        console.log("Dom cargado");
        //gestionar la petición ajax
        //en el caso de recoger los datos
            //pintar por pantalla listado
            //pintar por pantalla tabla
            //pintar por pantalla grid
            //guardar datos en indexeddb
    }
}
$(document).ready(app.init);
/*
1.- Crear un código html con un JS asociado
2.- Descargar los datos mediante uan petición AJAX desde una URL "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" JSON y colocarlos en una variable llamada datos
3.- Presentar los datos en un formato listado (ul+li)
4.- Presentar los datos en un formato de tabla (tr+td)
5.- Presentar los datos en un formato grid (bootstrap+col-6)
6.- Guardar los datos en indexeddb para luego consultarlos antes de hacer la petición ajax
*/
