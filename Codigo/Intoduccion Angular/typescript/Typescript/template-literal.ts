(function () {
  function getEdad() {
    return 100 + 100 + 300;
  }
  const nombre = "Fernando";
  const apellido = "Herrera";
  const edad = 33;

  // const salida = nombre + apellido + edad;
  // si lo hago de esta manera saldria todo pegado
  const salida = `
    ${nombre} 
    ${apellido} 
    ( ${getEdad()} )`;
  // \n sirve para dar un salto de linea

  // rt//: Fernando Herrera (Edad: 33)

  console.log(salida);
})();
