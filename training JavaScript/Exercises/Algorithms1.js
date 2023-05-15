// // // ----------Exercise 1---------------//

// // const fecha = new Date();
// // let mes = fecha.getMonth() + 1;
// // console.log(mes);

// // switch (mes) {
// //   case 1:
// //   case 3:
// //   case 5:
// //   case 7:
// //   case 8:
// //   case 10:
// //   case 12:
// //     dias = 31;
// //     break;
// //   case 4:
// //   case 7:
// //   case 9:
// //   case 11:
// //     dias = 30;
// //     break;
// //   case 2:
// //     dias = 29;
// //     break;
// // }
// // console.log("Tiene " + dias + " días.");
// // //----------Exercise 2---------------//

// // let answer = prompt("Please,write a month");
// // let days;
// // switch (answer) {
// //     //Así es como ponemos varias respuestas para un mismo valor
// //   case "January":
// //   case "March":
// //   case "May":
// //   case "July":
// //   case "August":
// //   case "October":
// //   case "Dicember":
// //     days = 31;
// //     break;
// //   case "February":
// //     days = 29;
// //     break;
// //   default:
// //     days = 30;
// //     break;
// // }
// // switch (answer) {
// //   case "January":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "February":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "March":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "April":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "May":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "June":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "July":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "August":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "September":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "October":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "November":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   case "Dicember":
// //     console.log("Your month is " + answer + " y tiene " + days + " días.");
// //     break;
// //   default:
// //     console.log("That's not a real month!");
// //     break;
// // }

// // //----------Exercise 3---------------//

// // let temp = prompt("What temperature is it?");

// // switch(true){
// //     case temp<15:
// //         console.log("Warm up.");
// //         break;
// //     case temp>14 && temp<26:
// //         console.log("Enjoy the weather!");
// //         break;
// //     case temp>25:
// //         console.log("Cool down.");
// // }

// // //----------Exercise 4---------------//

// // let isGreen=true;
// // //Semáforo
// // if (isGreen){
// //     console.log("Cross the road");
// // }else{
// //     console.log("Please await");
// // }

// // //----------Exercise 5---------------//

// // // let AbsoluteZero = 273.15;
// // // let FreezingPoint = 0;
// // // let BodyTemperature = 37;
// // // let BoilingPoint = 100;

// // // switch ((AbsoluteZero, FreezingPoint, BodyTemperature, BodyTemperature)) {
// // //   case AbsoluteZero:
// // //   case FreezingPoint:
// // //   case BodyTemperature:
// // //   case BoilingPoint:
// // //     AbsoluteZero = (AbsoluteZero * 9) / 5 + 32;
// // //     FreezingPoint = (FreezingPoint * 9) / 5 + 32;
// // //     BodyTemperature = (BodyTemperature * 9) / 5 + 32;
// // //     BoilingPoint = (BoilingPoint * 9) / 5 + 32;
// // //     console.log(
// // //       "Temperature Absolute Zero: " +
// // //         AbsoluteZero +
// // //         "ºF, Freezing point: " +
// // //         FreezingPoint +
// // //         "ºF, Body Temperature: " +
// // //         BodyTemperature +
// // //         "ºF and Boiling point: " +
// // //         BoilingPoint+"ºF"
// // //     );
// // // }

// // //----------Exercise 6---------------//

// // // let email="tolkien@lordofrings.com";
// // // let password="aNBR6ZeWPY";
// // // let mail= prompt("Email");
// // // let passw= prompt("Password");

// // // if(email==mail && password==passw){
// // //     console.log("Welcome Mr.Tolkien");
// // // }else{
// // //     console.log("Wrong password or email");
// // // }

// // //----------Exercise 7---------------//

// // // let euros = 15;
// // // let Dolar = "Dólar americano",
// // //   Yen = "Yen Japonés",
// // //   Libra = "Libra esterlina",
// // //   Franco = "Franco suizo";

// // // switch (Franco) {
// // //   case "Franco suizo":
// // //     Franco = euros * 1;
// // //     console.log(euros + " euros equivalen a " + Franco + " francos suizos");
// // //     Libra = euros * 0.88;
// // //     console.log(euros + " euros equivalen a " + Libra + " libras esterlinas");
// // //     Yen = euros * 151.69;
// // //     console.log(euros + " euros equivalen a " + Yen + " yen japoneses");
// // //     Dolar = euros * 1.11;
// // //     console.log(euros + " euros equivalen a " + Dolar + " dólares americanos");

// // //     break;
// // // }

// // //----------Exercise 8---------------//
// //Poner parsefloat para que no me lo tome como texto para luego la suma
// let num1 = parseFloat(prompt("Write the fist number"));
// let num2 = parseFloat(prompt("Write the second number"));
// let operation = prompt("What opperation do you want to do?");

// switch (operation) {
//   case "suma":
//     console.log(num1 + num2);
//     break;
//   case "resta":
//     console.log(num1 - num2);
//     break;
//   case "multiplicacion":
//     console.log(num1 * num2);
//     break;
//   case "division":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Is not a true option");
//     break;
// }
// // //----------Exercise 9---------------//

// let dni = prompt("DNI OR NIE").toLowerCase();
// let validDocument = true;
// let isDni = true;

// if (dni.charCodeAt(0) == 116 || dni.charAt(0) == 116) {
//   isDni = false;
// }
// if (isDni) {
//   for (let index = 0; index < dni.length; index++) {
//     if (index <= 7) {
//       if (dni.charCodeAt(index) > 48 || dni.charCodeAt(index) > 57) {
//         validDocument = false;
//       }
//     } else {
//       if (dni.charCodeAt(index) < 97 || dni.charCodeAt(index) > 122) {
//         validDocument = false;
//       }
//     }
//   }
// }else{
//     for (let index = 1; index < dni.length; index++) {
//         if (index <= 7) {
//           if (dni.charCodeAt(index) > 48 || dni.charCodeAt(index) > 57) {
//             validDocument = false;
//           }
//         } else {
//           if (dni.charCodeAt(index) < 97 || dni.charCodeAt(index) > 122) {
//             validDocument = false;
//           }
//         }
//       }
// }
// if (validDocument && isDni) {
//   console.log("It's valid DNI");
// } else if(validDocument){
//   console.log("It is NIE");
// }else{
//     console.log("Not valid ID");
// }
//REPASAR ESTE EJERCICIO TAN DIFICIL

//------------EJERCICIO 10----------------//

// let max=6;
// let min=1;

// let numA=Math.floor(Math.random() * (max-min+1)*min);
// let numB=Math.floor(Math.random() * (max-min+1)*min);


// console.log(numA);
// console.log(numB);
// if (numA==numB){
//     console.log("Draw");
// }else if(numA>numB){
//     console.log("Player 1 wins!");
// }else{
//     console.log("Player 2 wins!");
// }

