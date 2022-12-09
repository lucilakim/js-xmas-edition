const $form = document.querySelector('[name=formulario]');
const $button = $form.submit;

$button.onclick = (e) => {
    const city = $form.ciudad.value;
    const giftDescription = $form['descripcion-regalo'].value;
    
    console.log(validateCity(city));
    console.log(validateGiftDescription(giftDescription));
    e.preventDefault();
}

//---------- Functions will go in another file called "class-7-task-calculations.js".
function validateCity(city) {
    ValidateNotEmpty(city, 'You must select a city');
} 

function validateGiftDescription(description){
    ValidateNotEmpty(description, 'You must write what you would like to receive')
}

function ValidateNotEmpty(value, message) {
    if (value.length === 0) {
        return message;
    }
    return '';
}
/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
