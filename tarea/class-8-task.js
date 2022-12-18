const $form = document.querySelector('[name=formulario]');
$form.onsubmit = validateForm;

function validateForm(e) {
    e.preventDefault();
    const city = $form['ciudad'].value;
    const giftDescription = $form['descripcion-regalo'].value;
    const errorCity = validateCity(city);
    const errorGiftDescription = validateGiftDescription(giftDescription);

    const errors = {
        ciudad: errorCity,
        'descripcion-regalo': errorGiftDescription
    }

    const isSuccess = handleErrors(errors) === 0;
    if (isSuccess) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';

        setTimeout(() => {
            window.location.href = 'wishlist.html';
        }, 5000);
    }
}

function handleErrors(errors) {
    document.querySelectorAll('.error-item').forEach(e => {
        e.remove();
    });

    const keys = Object.keys(errors);
    const $errors = document.querySelector('#errores');
    let errorQuantity = 0;

    keys.forEach((key) => {
        const error = errors[key];

        if (error) {
            $form[key].className = 'error';
            const $error = document.createElement('li');
            $error.className = 'error-item';
            $error.innerText = error;
            $errors.appendChild($error);
            errorQuantity++;
        } else {
            $form[key].className = '';
        }
    })

    return errorQuantity;
}

/*# Tarea clase 8

A las 2 tareas de la clase 6, ponerles las validaciones que consideren
necesarias (Usando RegExp, Objetos, foreEach, poner estilos, mostrar los errores en la interfaz de usuario y escirbir pruebas).

TIP: Las edades no pueden tener decimales.

el mensaje exitoso se muestre 5 segundos y nos redireccione a 

la otra limpiar el error para que no se acumulen
*/