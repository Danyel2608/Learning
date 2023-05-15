let numbers = prompt("Please,write a number");
let texto=" ";//Pongo este valor para que sin da error no me ponga undefinded.

//Para comparar,siempre pondré true
//Para comprobar si cumple ese caso
//Es decir,es true or false.
switch (true) {
  case numbers < 0:
    texto = "Es menor que 0";
    break;
  case numbers > 0 && numbers < 11:
    texto = "Está entre 0-11";
    break;
  case numbers > 11 && numbers < 20:
    texto = "Está entre 11-20";
    break;
  case numbers > 20:
    texto = "Es mayor que 20";
    break;
  default:
    console.log("Error");
    break;
}
console.log(numbers + " " + texto);
