// Escribe tu código aquí.
function obtenerStrings(string, arrayStrings) {

    let cadenaStrings = [];
  
    for (let i = 0; i < arrayStrings.length; i++) {

      if (arrayStrings[i].length > string.length) {
        cadenaStrings.push(arrayStrings[i]);

      }else if(string.length > arrayStrings[i].length){
        cadenaStrings.push(string);
      }

    }
  
    return cadenaStrings;
  }

let string1 = "Hola              ";

let arregloStrings = ["Hola mundo", "Hola a todos", "Adiós"];

console.log(obtenerStrings(string1,arregloStrings));