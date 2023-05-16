//1.........................................................
function food(hamburger,fries){
    if (hamburger >= 3 && fries >= 1) {
        console.log('Ми поїли');
        } else if (hamburger <= 3 && fries == 1) {
        console.log('Ми ідемо в інше кафе');
        }
        }

    food(4,1)
    food(2,1)
    food(1,1)
   
 //2......................................................
 function Price(price) {
    if (price >= 1000 && price <= 1900) {
    console.log("Ціна знаходиться в діапазоні між 1000 та 1900");
    }
    }
    
    //let price = 1025;
    Price(price); 
    
//3........................................................
function price(price1) {
    if (!(price1 >= 1000 && price1 <= 1900)) {
    console.log('ціна не знаходиться в діапазоні між 1000 та 1900')
    }
    }
    
    let price1 = 999;
    price(price); 

    
    function checkp(price) {
        if (price < 1000 || price > 1900) {
        console.log('ціна не знаходиться між 1000 та 1900')
        }
        }
        
        let price2 = 2000;
        checkp(price2); 
        
//4.............................................
function getSeason(numofseason) {
    if (numofseason === 1) {
    console.log("Зима");
    } else if (numofseason === 2) {
    console.log("Весна");
    } else if (numofseason === 3) {
    console.log("Літо");
    } else if (numofseason === 4) {
    console.log("Осінь");
    }
    }
    
    let numofseason = 3;
    getSeason(numofseason);
    
//5.......................................
function getmidnum(a, b, c) {
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
    }
    
    let a = 5;
    let b = 15;
    let c = 20;
    getmidnum(a, b, c); 
    
    a = 10;
    b = 30;
    c = 20;
    getmidnum(a, b, c);
    
//6............................................   
function getWeekday(numofweeksday) {
    switch(numofweeksday) {
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
    }
    numofweeksday = 8;
    getWeekday(numofweeksday); 

//7..............................................................
function preferoperator(operation, num1, num2) {
    let result;
  
    switch(operation) {
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
  
    return result;
  }
  
  let result = preferoperator('*', 5, 5);
  console.log(result);
        
//8...............................................
function removevowels(str) {
    return str.replace(/[uie]/gi, '');
  }
  
  let word = 'Turkiye';
  let result1 = removevowels(word);
  console.log(result1);        
//9............................................... 



