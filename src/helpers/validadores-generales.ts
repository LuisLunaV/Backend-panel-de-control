const validarEmail = (email: string) => {
  const caracteresValidos = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = caracteresValidos.test(email);

  if (!isValidEmail) {
    console.log('email 1 ')
    throw new Error("Este email no es valido");
  }
};


const validarCaracteresMaliciosos = (mensaje: string, tipo:string):boolean => {
  console.log(mensaje)
  const caracteresProhibidos= /[<>;'"()]/g;
  const estiquetasMaliciosas =
    /<(?:script|iframe|object|embed|link|style)\b[^>]*>/i;
  const isMaliciusTarget = estiquetasMaliciosas.test(mensaje);

  if (isMaliciusTarget) {
    throw new Error(`El ${tipo} no debe contener etiquetas HTML maliciosas`);
  }

  const isMaliciusMessage = caracteresProhibidos.test(mensaje);

    if (isMaliciusMessage) {
    throw new Error(`El ${tipo} no debe contener caracteres maliciosos`);
  }

return true;
};
export{
  validarEmail,
  validarCaracteresMaliciosos
}
