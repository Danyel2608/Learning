//EJERCICIO1

// let maximo = prompt("What is maximo of the array?");
// let minimo = prompt("What is minimo of the array?");

// function compareNumbers(a, b) {
//     return a - b;
// }
// function getRandomInt(minimo, maximo) {
//     minimo = Math.ceil(minimo);
//     maximo = Math.floor(maximo);
//     return Math.floor(Math.random() * (maximo - minimo+1) + minimo); // The maximum is exclusive and the minimum is inclusive
//   }

// if (maximo > 0 && minimo > 0) {
//   let array = [
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//     getRandomInt(minimo,maximo),
//   ];
//   array.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(array)
//   console.log("Max value is "+array[19]);
//   console.log("Min value is "+array[0]);
// }

//EJERCICIO 2

// let now = new Date();
// alert(now);
// let userName = prompt("What is your name?");
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let greeting = {
//   Morning: "Good Moorning," + userName + "!",
//   Afternoon: "Good Afteroon," + userName + "!",
//   Evening: "Good Evening," + userName + "!",
// };

// if (hours >= 5 && hours < 12 ) {
//   console.log(greeting.Morning);
// } else if (hours >= 12 && hours < 15 ) {
//   console.log(greeting.Afternoon);
// } else {
//     console.log(greeting.Evening);
//   }

//EJERCICIO 3
// function generarLetra(){
// 	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
// 	var numero = (Math.random()*15).toFixed(0);
// 	return letras[numero];
// }

// function colorHEX(){
// 	var coolor = "";
// 	for(var i=0;i<6;i++){
// 		coolor = coolor + generarLetra() ;
// 	}
// 	return "#" + coolor;
// }

// console.log(colorHEX());
// let colorH=colorHEX();

// console.log("%cHello Word!","color:colorH");

//EJERCICIO 4

// let DNI= prompt("Write yout dni without letter");
// let letter= DNI%23;

// switch (letter) {
//   case 0:
//     console.log(DNI+"-T");
//     break;
//   case 1:
//     console.log(DNI+"-R");
//     break;
//   case 2:
//     console.log(DNI+"-W");
//     break;
//   case 3:
//     console.log(DNI+"-A");
//     break;
//   case 4:
//     console.log(DNI+"-G");
//     break;
//   case 5:
//     console.log(DNI+"-M");
//     break;
//   case 6:
//     console.log(DNI+"-Y");
//     break;
//   case 7:
//     console.log(DNI+"-F");
//     break;
//   case 8:
//     console.log(DNI+"-P");
//     break;
//   case 9:
//     console.log(DNI+"-D");
//     break;
//   case 10:
//     console.log(DNI+"-X");
//     break;
//   case 11:
//     console.log(DNI+"-B");
//     break;
//   case 12:
//     console.log(DNI+"-N");
//     break;
//   case 13:
//     console.log(DNI+"-J");
//     break;
//   case 14:
//     console.log(DNI+"-Z");
//     break;
//   case 15:
//     console.log(DNI+"-S");
//     break;
//   case 16:
//     console.log(DNI+"-Q");
//     break;
//   case 17:
//     console.log(DNI+"-V");
//     break;
//   case 18:
//     console.log(DNI+"-H");
//     break;
//   case 19:
//     console.log(DNI+"-L");
//     break;
//   case 20:
//     console.log(DNI+"-C");
//     break;
//   case 21:
//     console.log(DNI+"-K");
//     break;
//   case 22:
//     console.log(DNI+"-E");
//     break;

//   default:
//     break;
// }

// if (DNI.length==8) {
//   if (letter>=0&&letter<=22) {
//     console.log("DNI is valid");
//   }else{
//     console.log("Letter is not valid");
//   }
// }else{
//   console.log("Data entered is wrong");
// }

//BONUS EJERCICIO 4
// let min=0;
// let max=99999999;
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min+1) + min);
//   }
// let DNI=getRandomInt(min,max);
// console.log(DNI);
// let letter= DNI%23;

// switch (letter) {
//   case 0:
//     console.log(DNI+"-T");
//     break;
//   case 1:
//     console.log(DNI+"-R");
//     break;
//   case 2:
//     console.log(DNI+"-W");
//     break;
//   case 3:
//     console.log(DNI+"-A");
//     break;
//   case 4:
//     console.log(DNI+"-G");
//     break;
//   case 5:
//     console.log(DNI+"-M");
//     break;
//   case 6:
//     console.log(DNI+"-Y");
//     break;
//   case 7:
//     console.log(DNI+"-F");
//     break;
//   case 8:
//     console.log(DNI+"-P");
//     break;
//   case 9:
//     console.log(DNI+"-D");
//     break;
//   case 10:
//     console.log(DNI+"-X");
//     break;
//   case 11:
//     console.log(DNI+"-B");
//     break;
//   case 12:
//     console.log(DNI+"-N");
//     break;
//   case 13:
//     console.log(DNI+"-J");
//     break;
//   case 14:
//     console.log(DNI+"-Z");
//     break;
//   case 15:
//     console.log(DNI+"-S");
//     break;
//   case 16:
//     console.log(DNI+"-Q");
//     break;
//   case 17:
//     console.log(DNI+"-V");
//     break;
//   case 18:
//     console.log(DNI+"-H");
//     break;
//   case 19:
//     console.log(DNI+"-L");
//     break;
//   case 20:
//     console.log(DNI+"-C");
//     break;
//   case 21:
//     console.log(DNI+"-K");
//     break;
//   case 22:
//     console.log(DNI+"-E");
//     break;

//   default:
//     break;
// }

//EJERCICIO 5
// let num_matriculas = prompt("¿Cuantas matriculas?");

// for (let index = 1; index <= num_matriculas; index++) {
//   let min = 0000;
//   let max = 9999;
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   let numbers=getRandomInt(min,max);
//   if (numbers<1000) {
//     numbers="0"+numbers;
//   }

//   let characters = "BCDFGHJKLMNPRSTVWXYZ";
//   let result1;
//   let result2;
//   let result3;
//   let charactersLength = characters.length;

//   result1 = characters.charAt(Math.floor(Math.random() * charactersLength));
//   result2 = characters.charAt(Math.floor(Math.random() * charactersLength));
//   result3 = characters.charAt(Math.floor(Math.random() * charactersLength));
//   let letters = result1 + result2 + result3;

//   console.log("Matricula " + index + ": " + numbers + letters);

// }

//EJERCICIO 6

// let frases = [
//   "Nunca te rindas",
//   "Sigue adelante",
//   "No importa sufrir",
//   "Llegarás a tu meta",
//   "Lucha!",
//   "Sé fuerte",
//   "Nunca mires atrás",
//   "Estás haciendolo genial!",
//   "Nvere give up!",
//   "Continúa!",
//   "Sueña!",
//   "Disfruta del proceso",
//   "Avanza hacia la meta",
//   "Persigue tus sueños",
//   "Piensa en lo que llevas hecho",
//   "Piensa por qué estás aquí",
//   "No dudes",
//   "Hazloo!",
//   "Tú puedes!",
//   "Falta poco!",
//   "Eres el mejor!",
// ];

// for (let index = 0; index < frases.length; index++) {
//   let timerId= setInterval(()=> alert(frases[index]),10000)
//   setTimeout(()=>{clearInterval(timerId);alert("stop")},120000)

// }

//EJERCICIO 7
// let min2 = 0;
// let max2 = 500;
// function getRandomInt2(min2, max2) {
//   min2 = Math.ceil(min2);
//   max2 = Math.floor(max2);
//   return Math.floor(Math.random() * (max2 - min2 + 1) + min2);
// }
// let contador = 0;
// let num_aleatorios = [];
// num_aleatorios.length = 100;
// for (let index = 0; index < num_aleatorios.length; index++) {
//   num_aleatorios[index] = getRandomInt2(min2, max2);
//   if (num_aleatorios[index] % 2 != 0) {
//     contador = contador + 1;
//   }
// }
// console.log(num_aleatorios);
// console.log(contador);

// function filtrer_impar(num_aleatorios) {
//   return num_aleatorios.filter((num_aleatorios) => num_aleatorios % 2 != 0);
// }
// console.log(filtrer_impar(num_aleatorios));

// for (let index = 0; index < contador-1; index++) {
//   for (let j = 0; j < contador-2; j++) {
//     if (filtrer_impar(num_aleatorios[j])>filtrer_impar(num_aleatorios[j+1])){
//       aux=filtrer_impar(num_aleatorios[j]);
//       filtrer_impar(num_aleatorios[j])=filtrer_impar(num_aleatorios[j+1]);
//       filtrer_impar(num_aleatorios[j+1])=aux;
//     }
//   }

// }
// console.log(filtrer_impar(num_aleatorios));

//EJERCICIO8
// let play = prompt("Do you like play game?");
// let description;
// if (play == "Y") {
//   description = alert(
//     "The game consist in win with your cart. If you cart is better that bank you win."
//   );
// }
// let saldoInicial = 500;
//   while (saldoInicial > 0 && play=="Y") {
//     let apuesta = prompt("What it your bet?");
//     let palos = [1, 2, 3, 4];
//     let carts = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
//     let palos1 = [1, 2, 3, 4];
//     let carts1 = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

//     let JACK = 11;
//     let QUEEN = 12;
//     let KING = 13;
//     let ACE = 14;

//     let min = 2;
//     let max = 14;
//     let min2 = 1;
//     let max2 = 4;
//     function banca1(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     function miCarta1(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     function banca2(min2, max2) {
//       return Math.floor(Math.random() * (max2 - min2 + 1) + min2);
//     }
//     function miCarta2(min2, max2) {
//       return Math.floor(Math.random() * (max2 - min2 + 1) + min2);
//     }
//     switch (banca1(min, max)) {
//       case 2:
//         carts = 2;
//         break;
//       case 3:
//         carts = 3;
//         break;
//       case 4:
//         carts = 4;
//         break;
//       case 5:
//         carts = 5;
//         break;
//       case 6:
//         carts = 6;
//         break;
//       case 7:
//         carts = 7;
//         break;
//       case 8:
//         carts = 8;
//         break;
//       case 9:
//         carts = 9;
//         break;
//       case 10:
//         carts = 10;
//         break;
//       case 11:
//         carts = JACK;
//         break;
//       case 12:
//         carts = QUEEN;
//         break;
//       case 13:
//         carts = KING;
//         break;
//       case 14:
//         carts = ACE;
//         break;

//       default:
//         break;
//     }
//     switch (miCarta1(min, max)) {
//       case 2:
//         carts1 = 2;
//         break;
//       case 3:
//         carts1 = 3;
//         break;
//       case 4:
//         carts1 = 4;
//         break;
//       case 5:
//         carts1 = 5;
//         break;
//       case 6:
//         carts1 = 6;
//         break;
//       case 7:
//         carts1 = 7;
//         break;
//       case 8:
//         carts1 = 8;
//         break;
//       case 9:
//         carts1 = 9;
//         break;
//       case 10:
//         carts1 = 10;
//         break;
//       case 11:
//         carts1 = JACK;
//         break;
//       case 12:
//         carts1 = QUEEN;
//         break;
//       case 13:
//         carts1 = KING;
//         break;
//       case 14:
//         carts1 = ACE;
//         break;

//       default:
//         break;
//     }

//     switch (banca2(min2, max2)) {
//       case 1:
//         palos = "clubs";
//         break;
//       case 2:
//         palos = "hearts";
//         break;
//       case 3:
//         palos = "spides";
//         break;
//       case 4:
//         palos = "diamonds";
//         break;

//       default:
//         break;
//     }
//     switch (miCarta2(min2, max2)) {
//       case 1:
//         palos1 = "clubs";
//         break;
//       case 2:
//         palos1 = "hearts";
//         break;
//       case 3:
//         palos1 = "spides";
//         break;
//       case 4:
//         palos1 = "diamonds";
//         break;

//       default:
//         break;
//     }
    
//     console.log("Carta de la banca: " + carts + " de " + palos);
//     console.log("Tu carta: " + carts1 + " de " + palos1);
//     if (apuesta > saldoInicial) {
//       console.log("Invalid bet,try again.");
//     } else {
//       if (carts1 > carts) {
//         console.log("You win!!");
//         saldoInicial = parseInt(saldoInicial) + parseInt(apuesta);
//       } else if (carts1 == carts) {
//         console.log("Draw");
//         saldoInicial = saldoInicial;
//       } else if (carts1 < carts) {
//         console.log("You lost!");
//         saldoInicial = saldoInicial - apuesta;
//       }
//     }
//     console.log(saldoInicial);
    
    
//     if(saldoInicial==0){
//       play==="N";
//     }else{
//       play = prompt("Do you like play other game or exit?");

//     if (play == "EXIT") {
//       if (saldoInicial > 500) {
//         console.log(
//           "%cYour proffit is +" + (saldoInicial - 500),
//           "color:#008f39");
//           play==="N";
//       } else if(saldoInicial<500&&saldoInicial>0) {
//         console.log("%cYou lost -" + (500 - saldoInicial), "color:#ff0000");
//         play==="N";
//       }
//     }
//     }
//   }
// if (saldoInicial==0) {
//   console.log("LOST ALL MONEY :(");
// }
