function functionOne() {
    // TODO: Implement functionOne
}

function functionTwo() {
    // TODO: Implement functionTwo
}

// Converting temperatures question F = C x 1.8 + 32

// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32;

// console.log(fahrenheit);

// CASH EXAMPLE!!

// let cash = 28.45;
// let price = 40;

// let change = cash - price;

// if (cash > price) {
//     console.log(`you paid extra! Here's ${change} dollars in change.`);
// }
// else if (cash === price) {
//     console.log("you paid the exact amount, have a nice day");
// }
// else {
//     console.log(`you still owe ${change * -1} dollars`);
// }

// // -- TERNARY --

// let hot = true;

// // If hot.. say weather hot. Else, say weather cold.
// // Only makes sense for single line response/action.
// hot ? console.log('weather is hot outside') : console.log('weather is cold');

// let subscribed = true;
// let loggedIn = true;

// // in this case, the response is returning, so return it to str.
// let str = subscribed && loggedIn ? 'show the video': 'no show the video';
// console.log(str);

// // -- EXERCISE --

// let cash = 50;
// let price = 40;
// let isStoreOpen = true;

// let str2 = isStoreOpen && cash >= price ? 'print the receipt': 'no print the receipt';
// console.log(str2);

/* 
LOOPS
DRY = Don't repeat yourself.

For loop *** most important
While loop
Do while loop
*/

// //while loop
// let count = 1;

// while (count <= 3) {
//     count = count + 1;
//     console.log("This ran");
// }

// let counter = 1;
//  while (counter <= 100) {
//     console.log(`Printing   :..: ${counter} :..:`);
//     counter++; // <-- forgot this the first time, and of course... 'broke' the browser.
//  }

 // for loop

//  for (let i = 0; i <= 100; i+=2) {
//     console.log(`Counting by twos:-- ${i} --:`)
//  }

// /** Write a for-loop that loops through 1 to 20
//  * If the number is divisible by 3, print "Frontend"
//  * If the number is divisible by 5, print "Simplified"
//  * If the number is divisible by 3 and 5, print "Frontend Simplified"
//  * If the number is *not* divisible by either 3 or 5, print th enumber
//  * 
//  * @example
//  * 1 -> 1
//  * 2 -> 2
//  * 3 -> "Frontend"
//  * 4 -> 4
//  * 5 -> "Simplified"
//  * ...
//  * 15 -> Frontend Simplified"
//  * ...
//  * 20 -> "Simplified"
//  */


// for (let i = 1; i <= 100; i++) {
//     addOn = "";
//     if (i % 3 === 0) {
//         addOn = "\"Frontend\"";
//     }
//     if (i % 5 === 0) {
//         addOn = "\"Simplified\"";
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//         addOn = "\"Frontend Simplified\"";
//     }
//     if (addOn === "") {
//         addOn = i;
//     }

//     console.log(`${i} -> ${addOn}`);
// }

// /** Print out every character from the string:
//  * "Frontend Simlified"
//  * 
//  * @example
//  * 'F'
//  * 'r'
//  * 'o'
//  * ...
//  * 'e'
//  * 'd'
//  */

// const word = "Frontend Simplified";

// for (let i = 0; i < word.length; i++) {
//     console.log(`\'${word[i]}\'`);
// }


// // /** FUNCTIONS */
// // console.log("Welcome to FES, David");
// // console.log("Welcome to FES, Zen");
// // console.log("Welcome to FES, Mitri");

// // function welcomePersonToFES(name) { //<- Name is a Parameter
// //     console.log("Welcome to FES, " + name);
// // }

// // welcomePersonToFES("David"); // <- "David" is an Argument

// // RETURN

// // function fn() {
// //     return 'my return';
// //     console.log('my function'); // <- unused line because it's after a return.
// // }

// // console.log(fn()); //<- fn() RETURNS 'my return'.2

// // function sumOfTwoNumbers(num1, num2) {
// //     return num1 + num2;
// // }

// // console.log(sumOfTwoNumbers(15, 30));


// /** Create a function that covnerts Celsius to Fahrenheit
//  * 
//  * Celsius to Fahrenheit formula:
//  *  F = C X 1.8 + 32
//  * 
//  * @example
//  * convertCelsiusToFahrenheit(0) -> 32
//  * convertCelsiusToFahrenheit(10) -> 50
//  * convertCelsiusToFahrenheit(30) -> 86
//  */

// // function convertCtoF(c) {
// //     return c * 1.8 + 32;
// // }

// // console.log(convertCtoF(0));
// // console.log(convertCtoF(10));
// // console.log(convertCtoF(30));
// // console.log(convertCtoF(30));

// // NOW WITH AN ARROW FUNCTION :) :)

// // const convertCtoF = (c) => {
// //     return c * 1.8 + 32;
// // }

// // console.log(convertCtoF(30));

// -- UP THROUGH 1:34 in the Crash course. Ready for Arrays next.