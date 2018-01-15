function filtra() {
     var value = $("input").val().toLowerCase(); 
    //muestra u oculta elementos encontrados
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    console.log(this);
    //console.log(value);
}
function procesaTecla(event){  
    $("#myTable tr").filter(filtra);
    //console.log(this);
}
function init(){
    console.log("DOM Cargado Jquery");
    //filtrando por selector
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
    $("ul li").slice(4,6).css("background-color","yellow");
    //filtrado por función
    $("#myInput").on("keyup", procesaTecla);
    
    
}

$("document").ready(init);