

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





