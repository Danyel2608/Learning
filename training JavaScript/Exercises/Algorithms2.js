import {numGenerator} from "./utils.js";

const exercise1 = () => {
  let word = "palindrome";
  console.log(word.length);
  [...word].forEach((letter) => {
    console.log(letter);
  });
};

const exercise2 = () => {
  let palindrome = ["no lemon", "no melon"];
  let reverse = [...palindrome].reverse();
  console.log(reverse.join(","));
};

const exercise3 = () => {
  let result = "";
  let lado = 4;
  for (let filas = 0; filas < lado; filas++) {
    for (let columnas = 0; columnas < lado; columnas++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
};

const exercise4 = () => {
  let temp = [];
  temp.length = 7;
  let suma;
  for (let index = 0; index < temp.length; index++) {
    temp[index] = numGenerator(40,0);
    console.log("index" + index + ":" + temp[index]+"º");
  }
  for (let index = 0; index < temp.length; index++) {
    if (index == 0) {
      suma = temp[index];
    } else {
      suma = temp[index] + suma;
    }
  }
  let temp_media = suma / temp.length;
  return console.log(Math.floor(temp_media) + "º");
};
//======================================================================

const exercise5 = () => {
  let message = prompt("Write your text");
  let palabras = message.split(" ");
  let menu = {
    replaceChars: null,
    capitalize: null,
    replaceSpaces: null,
  };
  input = prompt("Replace chars by sings?");
  if (input == "y") {
    menu.replaceChars = true;
  } else {
    menu.replaceChars = false;
  }
  input2 = prompt("Capitalize?");
  if (input2 == "y") {
    menu.capitalize = true;
  } else {
    menu.capitalize = false;
  }
  input3 = prompt("Replace spaces with commas?");
  if (input3 == "y") {
    menu.replaceSpaces = true;
  } else {
    menu.replaceSpaces = false;
  }
  //TIEMPO
  let date = new Date();
  let inicio = date.getMilliseconds();
  stringManager(message, menu);
  let date1 = new Date();
  let fin = date1.getMilliseconds();
  let tiempo = fin - inicio;
  let chars = message.replaceAll(" ", "");
  chars = chars.split("");
  console.log(palabras.length + " words," + chars.length + " chars");
  if (tiempo > 0) {
    console.log("Work in " + tiempo + " Miliseconds");
  } else {
    console.log("Work in " + -tiempo + " Miliseconds");
  }
};

function stringManager(message, menu) {
  palabras = message.split(" ");

  console.log(
    "%cEntred message",
    "color:white;background-color:blue;font-weight:bold"
  );
  console.log(message);

  if (menu.replaceChars == true) {
    console.log(
      "%cChars replace by signs:",
      "color:white;background-color:blue;font-weight:bold"
    );
    replaceChars(message);
  }

  if (menu.capitalize == true) {
    console.log(
      "%cFirst letter of the word capitalized:",
      "color:white;background-color:blue;font-weight:bold"
    );
    capitalize(message);
  }

  if (menu.replaceChars == true) {
    console.log(
      "%cSpaces replaces by commas:",
      "color:white;background-color:blue;font-weight:bold"
    );
    replaceSpaces(message);
  }

  function replaceChars(message) {
    let string = message.replaceAll("a", "@");
    let string1 = string.replaceAll("e", "3");
    let string2 = string1.replaceAll("i", "1");
    let string3 = string2.replaceAll("o", "0");
    let string4 = string3.replaceAll("s", "$");
    console.log(string4);
  }

  function capitalize(message) {
    for (let index = 0; index < palabras.length; index++) {
      palabras[index] =
        palabras[index][0].toUpperCase() + palabras[index].substring(1);
    }
    console.log(palabras.join(" "));
  }

  function replaceSpaces(message) {
    console.log(message.replaceAll(" ", ","));
  }
}

//======================================================================

const exercise6 = () => {
  let string = prompt("Write something");
  let String = string.replaceAll(" ", ",");
  let String1 = String.split(",");
  let Lenght1 = String1.length;
  console.log(String1);

  let length = string.length;
  console.log("Lenght:" + length + " Characters");

  let length2 = string.replaceAll(" ", "");
  console.log("Lenght witout white-space:" + Lenght1);

  let contador = 0;
  let stringA = String1.sort();
  for (let index = 0; index < Lenght1; index++) {
    if (stringA[index] != stringA[index + 1]) {
      contador++;
    }
  }
  let result0 = (contador / Lenght1) * 100;
  console.log("Unique words(%):" + result0 + "%");

  let String2 = String1.sort();
  console.log("lenght of shortest word:" + String2[Lenght1 - 1].length);
  console.log("lenght of longest word:" + String2[0].length);

  let String3 = string.replaceAll(" ", "");
  let Lenght3 = String3.length;

  let result = Math.round(Lenght3 / Lenght1);
  console.log("Avg.word.lenght:" + result);
};

const exercise7 = () => {
  let math = Math.floor(Math.random() * (10 - 1 + 1) * 1);
  let num = prompt("Write a number under 0-10");
  let intentos = 3;
  if (num >= 0 && num <= 10) {
    while (math != num && intentos > 1) {
      console.log("Try it again");
      intentos--;
      console.log("Te quedan " + intentos + " intentos");
      num = prompt("Write a number under 0-10 again");
    }
    if (math == num) {
      console.log("You win!!");
    } else if (math != num && intentos <= 4) {
      console.log("Sorry,Good luck in love");
    }
  } else {
    console.log("Error,you must read instructions again");
  }
};

const exercise8 = () => {
  let userName = prompt("Write your userName");
  let password = prompt("Choose your password");
  let validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (validPassword.test(password)) {
    console.log(userName + " : Password is defined");
  } else console.log("Passwor not valid");
};

exercise8();