

// name  = "geeta";
// age = 24;
// price = 13.34;
// x = null
// y = undefined;
// radious = 14
// isFollow = false;

// fullname ="geeta";
// FULLNAME = "GEETA";
// console.log(fullname);
// console.log(FULLNAME);


// let name = 'geeta';
// let age =24;
// let totalPrice = 800;


// var myFavNum = "vinod";
// console.log(myFavNum);

// var myName = 'vinod';
// if(myName){
//     console.log('it is reaning truthhly b')
// }else {
//     console.log('its is false value')
// }


// console.log(parseInt('123'));

// console.log(parseInt(123,10));

// console.log(parseInt ("               123 "));


// console.log(parseInt("077"));
// console.log(parseFloat("077"));
// console.log(parseInt("1.9"));
// console.log(parseFloat("1.9"));
// Nan === Nan 
// if (Nan === Nan){
//     console.log('both are equal')
// }else{
//     console.log("not equal")
// }


let sum = "vinod" + 5;
console.log(sum); //output vinod5

let add = "5" + 5;
console.log(add); //output 0

let ad = "5" - "5";
console.log(ad); //output 0
console.log(10 + "20") //output 1020
console.log("java" + "script"); // output javascript
console.log(" " + " ")  //output blank
console.log(" " + 0); //output 0
console.log("vinod" - "thapa"); //NaN
console.log(true + true); // 2
console.log(true + false) //1
console.log(false + true) //1
console.log(false + false) //0
console.log(5===5) //true
console.log(5==="5") //false
console.log(5!==5); //false
console.log(5!=="5"); //true
console.log(5>2) //true
console.log(5<2) //false
console.log(10<=10) //true

var a = 5;
var b = 6;
console.log(a < 0 && b < 0); //false

var a = 10;
var b = 20;
console.log(a>10 || b>20); // false

var isOpen = false;
console.log(!isOpen); //true

// Interview question
var age = 18;
var hadDrrivingLicence = true;

if(age >= 18){
    console.log('haddriving line true');

}else{
    console.log('hadnotdrivinglince false')
}



let multiage = 19;
let result = multiage >= 18 ? 'yes' : 'no'
console.log(result);

console.log(2 < 12 < 5); //true left to right

console.log("20" + 10 + 10); //201010 
console.log("5" - 3)


var temp = 25;
if (temp>=30){
    console.log('lets got to beach')
}else if(temp >=20 && temp < 30){
    console.log('not go to beach')
}else{
    console.log('lets go room')
}
 
 
let userAge = 12;
let isCitizen = true;
let isregister = false;

if (userAge >= 18){
   if(isCitizen){
    if(isregister){
         console.log('you are eliable to vote')
    }else{
        console.log('you are not eligible due to registration status')
    }

   }else{
    console.log('you are eliginle due to citizenship')
   }
}else{
    console.log('you are not eligible to vote')
}

// odd or even number (jo sirf 2 se divede ho)


var num = 6;
if (num % 2 == 0){
 console.log('num is even');
}else{
    console.log('num is odd');
}

// prime number (ek to 1 hao dusra vo khud hai jisse vo devide ho)



// switch sattememnt
var day = "Monday";


switch(day){
    case "Monday" : 
    console.log('today is monday');
    case "Friday" :
    console.log("omg lets have party");
    case "Sunday" :
    console.log('lets go to move');
    case "Sunday" :
    console.log("Lets go to movie");

    default :
    console.log('no need')
}


// while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

// do while loop

let k = 1;
do{
    console.log(k)
    k++;
}while (k<10)


    // for loop
    for (var num =1 ; num<=10; num++);
     

    // lets crete table 5;

    var num = 1;
    while(num<=10){
        console.log("5 * " + num + ' = ' + (5*num));
        num++;
    }


    // calculate the sum of numbers from 1 to 10 using loop;


    sum = 0
    for (var num= 0 ; num<=10; num++){
        result = num+sum;
        console.log(result);
    }

    // prime number khud se ya 2 se divide ho 

    var num = 12;
    var isPrime = true;

    for (i=2,i<num;i++;){
        if(num % 1 == 0){
            isPrime= false;
            break; 
        }
    }


    // 8 table
     
    // 
//     j=1 
// i=1 *
//     * *
//     * * *
//     * * * *
//     * * * * *

for (var p=1; p<=5; p++){
    var pattern = "";
    for (var j = 1; j<=p; j++){
        pattern = pattern + "*";
    }
    console.log(pattern);  
}


// funcation is resuable code 


function addition(a,b){
return a + b;
}

console.log(addition(5,15))



function greet(name){
    console.log('hello '  + name + ",Welcomre to thapa tehchnical")
}

greet("ram");
greet("ajay");


function adit(a,b){
    return a + b;
}
console.log(adit(4,5))



var myFavname = "geeta";

myFavname = "ashwani";

console.log(myFavname)


let myFavName = "geeta";

myFavName = "ashwani";

console.log(myFavName)

    const myFavrName = "geeta";

// myFavrName = "ashwani";

console.log(myFavrName);

// TEMPLATE STRING
let firstName = 'geeta';
let lastName =   'bangde';

let fullName = `${firstName} ${lastName}`
console.log(fullName)

function summ(a,b=10){
    return a + b;
}
console.log(summ(5,20))

// normal function
function calculator(a,b,opertor){
    let results;

    switch(opertor){
        case "+":
        results = a + b;
       

        case "-":
        results = a-b;
        return results
        default:
        return "no opertor found";
    }

}
console.log(calculator(5,2,"+"));
// fat arrow function

const calculatora =(num1,num2,opertors) =>{
    let resultss;

    switch(opertors){
        case "+":
            resultss = num1 + num2;
       

        case "-":
            resultss = num1-num2;
        return resultss
        default:
        return "no opertor found";
    }

}
console.log(calculatora(5,2,"+"));

// reserve string

const isReverse = (str) => {
    let reverse ='' ;

   for(let char=str.length-1; char>=0; char--){
    reverse= reverse + (str[char]);

   }
   return reverse;
}
console.log(isReverse("geeta bangde"));

// palidndrome(isi) word same 

let arr = [];
console.log(typeof arr)
//output object

// let fruts = new Array ['apple','mongo']
// console.log(fruits[0]);

let fruits  = ['apple','mongo']

console.log(fruits[0]);

// let fruitss = ['apple','orange', 'mango','graps','banana']

//  for (let item of fruitss){
//     console.log(item)
//  }

//  let fruit = ['apple','orange', 'mango','graps','banana']

//  for (let item=0; item<fruit.length;item++){
//     console.log(item)
//  }

// fruitss.forEach((currElem ,index, arr)=>{
//     console.log(arr)
// });

let furits = ['apple','orange', 'mango','graps','banana']

const myMap = furits.map((curElement, index, array)=>{
    return`${curElement} ${index}`
  
  
   });

   console.log(myMap)

//  interview questin
//    <!-- write a function that uses the filter method to return an array containing only the products with a price less than or equal to 500 -->

const products = [
    {name: "laptop" , price:1800},
    {name: "tv" , price:900},
    {name: "difine", price:500},
    {name: "color", price:200},
    {name: "main", price:150}
];

const filterProducts= products.filter((curEem)=>{
    return curEem.price <= 500
    // console.log(curEem.price);
});

console.log(filterProducts);

// filter the unique values

const numbers = [1,2,3,4,8,5,8,6,7,8,9]

let unuquevalue = numbers.filter((curEemlemt, index,arr)=>{
  return arr.indexOf(curEemlemt) === index;
    // console.log(index);
    // console.log(arr);
});

console.log(unuquevalue);

// calculates the total price of the items in shoping cart 

 const productprice = [100,200,300,500]
 const totalPrice =  productprice.reduce((accumulator, cuurentElement) => {
    return accumulator + cuurentElement;

}, 0);
console.log(totalPrice);

  

// let test = 'thapa thechnial \"welcome"\ js \n \"course"\ in super fast '
//  console.log(test);


//  let text = "vinod thapa"
//  let strArr = Array.from(text);
//  console.log(strArr);

let text = "hello javascript ,welcome to out world best js course"
let resul = text.slice(1,4)
console.log(resul);



const str = "apple, banana" ;
 let strArr = str.split(",").reverse().join();
 console.log(strArr);


//  <!-- a se z tak print krna hai -->
//  console.log('a'.chartCodeAt(0))

// console.log(String.fromCharCode(122))

for(let char=97; char<=122; char++){
    console.log(String.fromCharCode(char))
}

// check the vowels 


// const checkAll = (sttr) => {
//     const vowels = "aeiou"
//     for (let char of value){
//         console.log(sttr.include(char));
//     }
// }
// let sttr = "my name is vinod thapa";
// console.log(checkAll);


// console.log()

console.log(Math.round(4.5));