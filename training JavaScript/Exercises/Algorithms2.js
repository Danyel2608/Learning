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
  let temp1 = 27,
    temp2 = 35,
    temp3 = 19,
    temp4 = 23,
    temp5 = 25,
    temp6 = 26,
    temp7 = 21;

  let temp_media = (temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7) / 7;
  return console.log(temp_media + "º");
};

const exercise5 = () => {
  let message = prompt("Write your text");
  let palabras = message.split(" ");
  let menu = prompt(
    "Choose your option: 1.Replace chars by sings? 2.Capitalize? 3.Replace spaces with commas?"
  );
  switch (menu) {
    case "1":
      let string = message.replaceAll("a", "@");
      let string1 = string.replaceAll("e", "3");
      let string2 = string1.replaceAll("i", "1");
      let string3 = string2.replaceAll("o", "0");
      let string4 = string3.replaceAll("s", "$");
      console.log(string4);
      break;
    case "2":
      for (let index = 0; index < palabras.length; index++) {
        palabras[index] =
          palabras[index][0].toUpperCase() + palabras[index].substring(1);
      }
      console.log(palabras.join(" "));
      break;
    case "3":
      console.log(message.replaceAll(" ", ","));
      break;

    default:
      break;
  }
};

// const exercise6 = () => {
//   let string="Lorem ipsum dolor sit amet";
//   let length=string.length();
//   let words=string.valueOf(string.charAt());
//   let wordsper100=
// }

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
  let validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if(validPassword.test(password)){
    console.log(userName+" : Password is defined");
  }else
  console.log("Passwor not valid");
};
exercise8();