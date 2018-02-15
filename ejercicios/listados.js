var app={
    resultados:[],
    presentaListado:function(){
        $.each(app.resultados,function(i,item){
            var nuevoLi="<li><a href='#'>"+item.titulo
            //+app.calculaBotones()
            +"</a></li>";
            $("#listado").append(nuevoLi);
        });
        /*
          for( var item of app.resultados){
              var nuevoLi="<li>"+item.titulo+"</li>";
              $("#listado").append(nuevoLi);
          }
        */
    },
    presentaTabla:function(){
        $.each(app.resultados,function(i,item){
              var nuevaFila="<tr>"
              +"<td>"+item.titulo+"</td>"
              +"<td>"+item.autor+"</td>"
              +"<td>"
              +app.calculaBotones()
              +"</td>"
              +"</tr>";
              $("#tabla tbody").append(nuevaFila);
          });
        /*
          for( var item of app.resultados){
              var nuevaFila="<tr>"
              +"<td>"+item.titulo+"</td>"
              +"<td>"+item.autor+"</td>"
              +"<td>"
              +"<button id=''>Mostrar</button>"
              +"<button id=''>Editar</button>"
              +"<button id=''>Borrar</button>"
              +"</td>"
              +"</tr>";
              $("#tabla tbody").append(nuevaFila);
          }
          */
    },
    calculaBotones:function(){
        return "<button id='' class='btn btn-success'> <span class='glyphicon glyphicon-eye-open'></span> Mostrar</button>"
                    +"<button id='' class='btn btn-warning'> <span class='glyphicon glyphicon-edit'></span> Editar</button>"
                    +"<button id='' class='btn btn-danger'> <span class='glyphicon glyphicon-trash'></span> Borrar</button>";
    },
    presentaCol:function(item){
        var columna="<div class='col-md-6 borde'>"
                    +"<h2 class='text-center'>"+item.titulo+"</h2>"
                    +"<h2 class='text-center'>"+item.autor  +"</h2>"
                    +"<div class='text-center'>"
                    +app.calculaBotones()
                    +"</div>"
                    +"</div>";
                  var ultimaFila=$(".container .row:last").append(columna);
    },
    presentaGrid:function(){
        var filaPar=0;
        for( var item of app.resultados){
              if(filaPar==0){
                  filaPar=1;
                  //presenta row
                  var nuevaRow="<div class='row'></div>";
                  $(".container").append(nuevaRow);
                  //presenta primer col
                  app.presentaCol(item);
                  //console.log(ultimaFila);
              }else{
                  filaPar=0;
                  //presenta segunda col
                  app.presentaCol(item);
              }
          }
    },
    peticionAjax:function(){
        $.getJSON(
            "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
        function(datos){
            app.resultados=datos;
            console.log(app.resultados);
            app.presentaListado();
            app.presentaTabla();
            app.presentaGrid();
        })
        .fail(function(){
            console.log("error");
        });  
    },
    init:function(){
        console.log("Dom cargado");
        //gestionar la petición ajax
        app.peticionAjax();
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
2.- Descargar los datos mediante uan petición AJAX desde una URL "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" JSON y colocarlos en una variable llamada resultados
3.- Presentar los datos en un formato listado (ul+li)
4.- Presentar los datos en un formato de tabla (tr+td)
5.- Presentar los datos en un formato grid (bootstrap+col-6)
*/
