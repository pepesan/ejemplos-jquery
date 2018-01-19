/*
Validaciones

1. crea un formulario típico de login en el HTML, con dos campos usuario y contraseña

*hecho!

2. Haz que cuando se pulse el botón de enviar el formulario valide si el nombre de usuario y la contraseña están rellenados o no y sólo si es así deje enviar el formulario, en caso contrario deberá informar al usuario de qué campo o campos faltan por rellenar.
*/
function init() {
    console.log("Dom Cargado!");
    $("#login").validate();
    /*

3. Haz el típico formulario de registro con los campos: nombre, email, repetir email, contraseña, repetir contraseña y aceptar condiciones del servicio. Con el botón de enviar el formulario

4. Valida el formulario, haciendo que el nombre tenga al menos 2 caracteres y sea requerido, el email sea valido y coincida en ambos campos, la contraseña tenga al menos 8 caracteres y coincidan y haya aceptado las condiciones del servicio.

(validador equalTo())
*/
    $("#registro").validate({
        rules: {
            email2: {
                equalTo: "#cemail"
            },
            rpassword: {
                equalTo: "#password",
            }
        },
        messages: {
            email2: {
                equalTo: "Los emails deben coincidir"
            },
            rpassword: {
                equalTo: "Las constraseñas deben concidir"
            }
        }
    });
}
$(document).ready(init);
