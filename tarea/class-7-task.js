const $form = document.querySelector('[name=formulario]');
const $button = $form.submit;

$button.onclick = (e) => {
    e.preventDefault();
    const city = $form.ciudad.value;
    const giftDescription = $form['descripcion-regalo'].value;

    console.log(city);
    console.log(giftDescription)
}

//---------- Functions will go in another file called "class-7-task-calculations.js".

/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
