// let count = 0;

// while (count < 10) {
//   console.log(count);
//   count++;
// }

// console.log("--------");

// //Cuenta atrás
// let counter = 10;
// let timer = setInterval(() => {
//     console.log(counter);
//   counter--;
//   if (counter< 0) {
//     clearInterval(timer);
//   }
// }, 1000);

// console.log("--------");

// let limit = 10;

// for (let count = 0; count < limit; limit++) {
//   console.log(count);
// }

//Cuenta atrás con while

// let number = 0;
// let tabla;
// while (number < 10) {
//   number++;
//   tabla = number * 10;
//   console.log(10 + " x " + number + " = " + tabla);
// }

// for(
//   let number=0,limit=10;
//   number <= limit;
//   number++,limit--
// ){
//   console.log(number+" "+limit)
// }

// let option = null;
// let colors = ["red", "green", "blue"];
// do {
//   console.log("Please,choose a color");
//   for (let index = 0; index < colors.length; index++) {
//     console.log(index + 1 + "." + colors[index]);
//   }
//   console.log("Press 0 to leave");
//   option = prompt("Make your choice");
//   switch (option) {
//     case "1":
//       console.log("%cHex code for red : #FF0000","color: #FF0000");
//       break;
//     case "2":
//       console.log("%cHex code for green : #008000","color: rgb(44,199,116)");
//       break;
//     case "3":
//       console.log("%cHex code for blue : #0000FF","color:#0000FF");
//       break;

//     default:
//       if (option != 0) {
//         console.warn("Not a valid option,please try again.");
//       } else {
//         console.log("Exiting,see you soon!");
//       }
//       break;
//   }
//   console.log(" ");
// } while (option != 0 && option!=null);

// //Para dar propiedades así:
// // let star = {
// //   name: "Polaris",
// //   constellation: "Urse Minor",
// //   type: "Double/Cepehid",
// //   spectralClass: "F7",
// //   mag: 2.0,
// //   "":"acceptable", //No es recomendable hacerlo.
// // }
// // //Para enseñarlo
// // console.log(star.name);

// // //Ejemplo de referencia por valor
// // //, es una copia pero no cambia su valor inicial.
// // let num1=4;
// // let num2=num1;
// // console.log(num2);
// // num2=7;
// // console.log(num1);
// // console.log(num2);

// // //No hacer porque son dos variables que van al
// // //mismo sitio
// // let star2=star;
// // star2.name= "Mizer";
// // star2.mag= 5.7;

// // //Para enseñarlo puede ser varos tipos
// // console.log(star.name);
// // console.log(star2.name);
// // console.log(star[""]);

// // let hero = {
// //   character: "Iron Man",
// //   name: "Tony Stark",
// //   powers: [
// //     "Genious-level intelect",
// //     "Multiple powered armor suits",
// //     "Ability to fly",
// //   ],
// //   info: {
// //     yearCreated: "1963",
// //     powerOrigin: "From his suit",
// //     weapons: ["Repusor rays", "Uni-beam projector", "lasers"],
// //     didYouknow:
// //       "Tony stark created and built one of the Spider-Man's upgraded suits know as the Iron Spider Suit.We got a smoll glimpse of it in Spider-Man : Homecoming",
// //   },
// // };
// // //Creando un nuevo objeto
// // let hero2 = new Object()
// // hero2.character = "Hulk";
// // hero2.name = "Bruce Burner";
// // hero2.powers = [
// //   "Strength",
// //   "Speed",
// //   "Stamina",
// //   "Durability",
// //   "Regeneration",
// //   "Night invulnerability",
// //   "Breathing underwater",
// // ];

// // console.log(Object.keys(hero2));
// // console.log(Object.keys(hero));

// //--------------EJERCICIO EJEMPLO ---------//

// // let shoppingCart = {
// //   product1: {
// //     product_id: "0",
// //     name: "Nike Air Zoom Pegasus 38",
// //     price: "47.99 €",
// //     quantity: "1",
// //   },
// //   product2: {
// //     product_id: "1",
// //     name: "Nike ZoomX Vaporfly Next%2",
// //     price: "59.99 €",
// //     quantity: "2",
// //   },
// //   product3: {
// //     product_id: "2",
// //     name: "Nike Air Max ",
// //     price: "64.99 €",
// //     quantity: "3",
// //   },
// //   product4: {
// //     product_id: "3",
// //     name: "Nike Phythom",
// //     price: "37.99 €",
// //     quantity: "4",
// //   },
// // };
// // let keys = Object.values(shoppingCart);

// // for (let index = 0; index < Object.keys(shoppingCart).length; index++) {
// //   console.log("ID: "+ keys[index].product_id+" , name : "+ keys[index].name);
// // }

//CLASES

// class Villains {}

// //Cada vez que ponga u heroe me rellena esos campos para cada heroe.
// class Avengers {
//   constructor(character, name) {
//     //Metodo constructor
//     this.character = character;
//     this.name = name;
//     this.powers = [];
//     this.bio = "";
//   }
//   set power(newPower) {
//     this.powers.push(newPower);
//   }
//   get power() {
//     console.log(this.powers.join(","));
//   }
//   static AvengersBio() {
//     this.bio =
//       "Creando un vengador definitivo para la proteccion de la tierrra";
//     console.log(this.bio);
//   }
// }

// let ironMan = new Avengers("IronMan", "Tny Stark");
// //Se utiliza el set para añadir nuevos poderes
// ironMan.power = "Flinght";
// ironMan.power = "IA";
// ironMan.power = "Strenght";
// ironMan.power = "Slow";
// //Get imprime esos nuevos poderes
// ironMan.power;
// //Las clases estaticas no necesitan ironMan. sino el nombre suyo directo.
// Avengers.AvengersBio();

//---------------EJEMPLO EJERCICIO CLASS-------------
// class User{
//   constructor(dni){
//     this.dni_s=dni;
//     this.UserNames="";
//     this.emails="";
//   }
//   set email(newEmail) {
//         this.emails=newEmail;
//       }
//       get email() {
//         console.log(this.emails);
//       }
//   set UserName(newUserName) {
//         this.UserNames=newUserName;
//       }
//       get UserName() {
//         console.log(this.UserNames);
//       }
     
//       get dni() {
//         console.log(this.dni_s);
//       }
// }

// let dani = new User("26499621X");
// dani.UserName="Daniel";
// dani.email="danielsalcedovivancos@gmail.com";
// // dani.UserName="Rocio";
// // dani.email="rocio@gmail.com";
// dani.UserName;
// dani.dni;
// dani.email;

