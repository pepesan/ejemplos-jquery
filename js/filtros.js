function filtra() {
    //coger el valor del campo de texto
     var value = $("#myInput").val().toLowerCase(); 
    //muestra u oculta elementos encontrados
    console.log(this); 
    var contieneValor=$(this).text().toLowerCase().indexOf(value) > -1;
    $(this).toggle(contieneValor);
    
    //console.log(value);
}
function procesaTecla(){  
    $("#myTable tr").filter(filtra);
    /*
    var resultados=$("#myTable tr");
    //console.log(this);
    
    for ( i in resultados){
        var item=resultados[i];
        filtra(item);
    }
    */
}
function init(){
    console.log("DOM Cargado Jquery");
    //filtrando por selector
    //$("ul li:last")
    $("ul li").filter(":last").css("background-color","red");
    
    //comprobación
    if($("ul li").is(".rojo")){
        console.log("encontrado");
        $("ul li.rojo").css("background-color","red");
    }
    //negación
    $("ul li").not(".rojo").css("background-color","green");
    //por posición
    $("ul li").eq(2).css("background-color","blue");
    $("ul li").slice(6).css("background-color","brown")
    $("ul li").slice(3,5).css("background-color","yellow");
    //filtrado por función
    $("#myInput").on("keyup", procesaTecla);
    
    
}

$("document").ready(init);