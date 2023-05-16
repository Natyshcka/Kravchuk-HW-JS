// 1-----------------------------------------------------------------------------
let hamburger = 2;
let fries = 1;

if(hamburger == 3 && fries == 1){
console.log('Ми поїли')
}

else if(hamburger <= 3 && fries == 1){
console.log('Ми ідемо в інше кафе')}

//2----------------------------------------------------------------------------------
let price = 1025;
if (price >= 1000 && price <= 1900) {
  console.log("Ціна знаходиться між 1000 та 1900");
}

//3-----------------------------------------------------------------------------------
let price1 = 999;
if (!(price1 >=1000 && price1 <=1900)) {
    console.log('ціна не знаходиться між 1000 та 1900')
    }

let price2 = 999;
if (price2 <1000 || price2 >1900) {
    console.log('ціна не знаходиться між 1000 та 1900')
    }
    
//4-----------------------------------------------------------------------------------
let numofseason = 2;

if (numofseason === 1) {
  console.log("Зима");
} else if (numofseason === 2) {
  console.log("Весна");
} else if (numofseason === 3) {
  console.log("Літо");
} else if (numofseason === 4) 
  console.log("Осінь");

//5-----------------------------------------------------------------------------------

let a = 5;
let b = 15;
let c = 20;

if (a > b) {
  if (b > c) {
    console.log("Середнє число: " + b);
  } else if (a > c) {
    console.log("Середнє число: " + c);
  } else {
    console.log("Середнє число: " + a);
  }
} else {
  if (a > c) {
    console.log("Середнє число: " + a);
  } else if (b > c) {
    console.log("Середнє число: " + c);
  } else {
    console.log("Середнє число: " + b);
  }
}

//6-----------------------------------------------------------------------------------
let numofweeksday = 3

switch(numofweeksday){
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
         console.log('П\'ятниця');
        break;
    case 6:
        console.log('Субота');
        break;
    case 7:
        console.log('Неділя');
        break;
    default:
        console.log('У тижні всього 7 днів');
}

//7-----------------------------------------------------------------------------------
let operation = '*';
let num1 = 5;
let num2 = 5;
let result;

switch(operation){
    case '+':
     result = num1 + num2;
        break;
    case '-':
     result = num1 - num2;
        break;
    case '*':
    result = num1 * num2;
        break;
    case '/':
    result = num1 / num2;
        break;
    default:
        console.log('Такого оператора не існує');
}
console.log(result);

//8-----------------------------------------------------------------------------------
let word = 'Turkiye';
let RegEx = word.replace(/[uie]/gi, '');
console.log(RegEx);
 
//9-----------------------------------------------------------------------------------
let meters = 2000;
let kilometers = meters / 1000;
let meterSuffix = "";
if (meters % 10 == 1 && meters % 100 != 11) {
    meterSuffix = "";
} else if (meters % 10 >= 2 && meters % 10 <= 4 && (meters % 100 < 10 || meters % 100 >= 20)) {
    meterSuffix = "и";
} else {
    meterSuffix = "ів";
}
let kilometerSuffix = "";
if (kilometers % 10 == 1 && kilometers % 100 != 11) {
    kilometerSuffix = "";
} else if (kilometers % 10 >= 2 && kilometers % 10 <= 4 && (kilometers % 100 < 10 || kilometers % 100 >= 20)) {
    kilometerSuffix = "и";
} else {
    kilometerSuffix = "ів";
}
console.log(`${meters} метр${meterSuffix} це ${kilometers} кілометр${kilometerSuffix}`);