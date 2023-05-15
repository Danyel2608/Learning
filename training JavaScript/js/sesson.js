//Conseguir fecha de hoy por el sistema
const d = new Date();
let month = d.getMonth() + 1;
let day = d.getDay();
let year = d.getFullYear();
let minutes = d.getMinutes();
let hour = d.getHours();
//Si es menor que 10 se le pondra un 0 delante
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (hour < 10) {
  hour = "0" + hour;
}
//Definir cómo va a salir nuestro resultado
let fullDate =
  " " + hour + ":" + minutes + " of " + day + "/" + month + "/" + year;
console.log(fullDate);

//Definir qué estación es
if (month == 12 || month == 1 || month == 2 || month == 3) {
  console.log("Invierno");
} else if (month > 3 && month < 7) {
  console.log("Pimavera");
} else if (month > 6 && month < 10) {
  console.log("Verano");
} else {
  console.log("Otoño");
}

console.log("--------");
//Ejemplo de switch
let character = "Black Widow";

switch (character) {
  case "Captain America":
    power = "Indestructible shield";
    break;
  case "Black Widow":
    power = "Master spy && assesin";
    break;
  case "Iron man":
    power = "Genius-level intelect";
    break;
  case "Thor":
    power = "The hammer of thor";
    break;
  default:
    console.log("Choose your hero!");
    break;
}
console.log(character + " : " + power);

console.log("--------");
//Ejercicio de switch

let num = 4;

