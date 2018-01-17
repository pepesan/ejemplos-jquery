function init(){
    $("#login").validate();
    $("#commentForm").validate();
    $("#commentForm2").validate({
        rules: {
            nombre: {
                "required":true,
                minlength:4
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nombre: {
                required:"Por favor intrduzca un nombre",
                minlength: "Son necesarios al menos 4 caracteres!"
            },
            email: {
                required: "Necesitamos su email para poder ponernos en contacto con usted",
                email: "Su email debe tener el formato similar a usuario@dominio.com"
            }
        }
    });
    //Revisar la documentación del plugin para más datos https://jqueryvalidation.org/documentation/
}
$(document).ready(init);