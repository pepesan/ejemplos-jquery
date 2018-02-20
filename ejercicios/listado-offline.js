/*
1.- Crea un html y asocialo con un fichero JS
2.- Descarga los datos desde "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" (json) y almacenalos en la BBDD IndexedDB
*/
function presentaListado(datos){
        $("#listado").html("");
        //console.log(app.resultadosFiltrados);
        $.each(datos,function(i,item){
            if(item!=undefined){
                var nuevoLi="<li><a href='#'>"+item.titulo
                //+app.calculaBotones()
                +"</a></li>";
                $("#listado").append(nuevoLi);
            }
        });
}
function peticionAjax(){
        $.getJSON(
            "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
        function(datos){
            console.log(datos);
            escribeLibrosBBDD(datos);
            presentaListado(datos);
        })
        .fail(function(){
            console.log("error");
        });  
}
var db;
function conectaDB() {
    console.log("conecta DDBB");
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    var request = window.indexedDB.open("Biblioteca", 1);

    request.onerror = function (event) {
        console.log("error: ");
    };

    request.onsuccess = function (event) {
        db = request.result;
        console.log("success: " + db);
        var datos=cogeTodos();
        presentaListado(datos);
        
    };

    request.onupgradeneeded = function (event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("Libros", {
            keyPath: "titulo"
        });
        /*
        for (var i in employeeData) {
            objectStore.add(employeeData[i]);
        }
        */
    }
}
/*
Me pasan un array de libros, escribo uno a uno en la bddd
*/
function escribeLibrosBBDD(datos){
    for(var item of datos){
        escribeLibro(item);
    }
}
function escribeLibro(objeto){
    var request = db.transaction(["Libros"], "readwrite")
        .objectStore("Libros")
        .add(objeto);

    request.onsuccess = function (event) {
        console.log("Dato añadido a la BBDD");
    };

    request.onerror = function (event) {
        console.log("No se ha podido añadir a la BBDD");
    }
}
function cogeTodos() {
    var transaction = db.transaction(["Libros"]);
    var objectStore = transaction.objectStore("Libros");
    var datos = [];
    var miCursor = objectStore.openCursor();
    miCursor.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            //console.log(cursor.value);
            datos.push(cursor.value);
            cursor.continue();
        } else {
            console.log('Entries all displayed.');
            return datos;
        }

    };
    miCursor.onerror = function (evento) {
        console.log("Algo ha ido chungo");
    };

    /*
    Con la especifiación v2 tenemos el getAll()
    var peticion=objectStore.getAll();
    console.log(peticion);
    peticion.onsuccess=function(evento){
        console.log(peticion.result);
        var listado=document.getElementById("listado");
        pintaDatos(peticion.result);
    }
    peticion.onerror=function(evento){
        console.log("Algo ha ido chungo");
    }
    */
}
function init(){
    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.")
    } else {
        conectaDB();
        
        peticionAjax();
        console.log("IndexedDB HTML5 está soportada en este navegador.");
    }
    
}
$(document).ready(init);
/*
3.- Utiliza los datos de la BBDD para pintarlos por pantalla en un formato listado (ul)
4.- Haz que aunque no funcione la petición ajax pueda presentar los datos de la bbdd
*/