(function () {
  let mensaje: string = "Hola";
  let numero: number = 123;
  let boolean: boolean = false; // false
  let hoy: Date = new Date();

  let cualquiercosa: string | number | Date | boolean;
  cualquiercosa = mensaje;
  cualquiercosa = numero;
  cualquiercosa = boolean;
  cualquiercosa = hoy;

  let spiderman = {
    // Objeto
    nombre: "Peter",
    edad: 30,
  };

  spiderman = {
    nombre: "Juan",
    edad: 100,
  };
})();
