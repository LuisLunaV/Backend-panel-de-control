export function clearInput( formulario ){
    const inputs = formulario.querySelectorAll('input[type="text"]');
    inputs.forEach( element => element.value = '' );
}