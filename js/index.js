function init(){
    console.log("DOM Cargado Jquery");
}

$("document").ready(init);

/*
$("document").ready(
    function(){
        console.log("DOM Cargado");
    }
);
*/

//buscar un substituto de window.addEventListener("load",function) en Jquery o simplemente usar esto

/*
Éste código está deprecado desde la 1.8
function loaded(){
    console.log("Pagina cargada");
}
$(window).load(loaded);
*/
/*
Esto podría ser algo similar, pero no lo es!

$("window").on("load",
    function(){
        console.log("Pagina Cargada");
    }
);
*/