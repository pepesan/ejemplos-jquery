function init(){
    $("#login").validate();
    $("#commentForm").validate();
    $("#commentForm2").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Por favor intrduzca un nombre",
        email: {
          required: "Necesitamos su email para poder ponernos en contacto con usted",
          email: "Su email debe tener el formato similar a usuario@dominio.com"
        }
      }
    });
    //Revisar la documentación del plugin para más datos https://jqueryvalidation.org/documentation/
}
$(document).ready(init);