const d = new Date();
let month = d.getMonth()+1;

if (month==12 || month==1 || month==2 || month==3){
    console.log("Invierno");
}else if (month>3 && month<7){
    console.log("Pimavera");
}else if (month>6 && month<10){
    console.log("Verano");
}else {
    console.log("Otoño");
}


