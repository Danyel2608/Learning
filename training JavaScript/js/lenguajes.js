//Le pido al usuario que escriba el lenguaje
let lenguaje=prompt("Choose your lenguaje: en | de | pt | po");
let result;

//Casos según la respuesta
switch (lenguaje) {
  case "en":
    result = "Leguaje is English,execute code for English";
    break;
  case "de":
    result = "Leguaje is German,execute code for English";
    break;
  case "pt":
    result = "Leguaje is Portuguese,execute code for English";
    break;
  case "po":
    result = "Leguaje is Polish,execute code for English";
    break;
  default:
    //Escribimos esto en caso de que no sea ningun..
    //..caso anterior
    console.log("Lenguaje not chosen,using Spanish");
    break;
}
//Escribimos la solución
console.log(result);