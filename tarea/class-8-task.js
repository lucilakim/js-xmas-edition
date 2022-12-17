const $form = document.querySelector('[name=formulario]');
$form.onsubmit = validateForm;

function validateForm(e) {
    e.preventDefault();
    const city = $form['ciudad'].value;
    const giftDescription = $form['descripcion-regalo'].value;

    const errorCity = validateCity(city);
    const errorGiftDescription = validateGiftDescription(giftDescription);

    const errors = {
        city: errorCity,
        'descripcion-regalo': errorGiftDescription
    }

    handleErrors(errors);
}

function handleErrors(errors) {
    errorCity = errors.city;
    errorGiftDescription = errors['descripcion-regalo'];

    if (errorCity) {
        $form['ciudad'].className = 'error';
    } else {
        $form['ciudad'].className = '';
    }

    if (errorGiftDescription) {
        $form['descripcion-regalo'].className = 'error';
    } else {
        $form['descripcion-regalo'].className = '';
    }
}


/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias (Usando RegExp, Objetos, foreEach, poner estilos, mostrar los errores en la interfaz de usuario y escirbir pruebas).

TIP: Las edades no pueden tener decimales.

el mensaje exitoso se muestre 5 segundos y nos redireccione a 

la otra limpiar el error para que no se acumulen
*/