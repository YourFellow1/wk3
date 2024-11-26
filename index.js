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

// /** ARRAYS */

// let item1 = 20;
// let item2 = 30;
// let item3 = 40;
// let item4 = 50;
// let item5 = 100;

// let arr = [20, 30, 40, 50, 100, '', true];

// console.log(arr[0]);

// arr.push(200);


// // SYNTAX OF A CALLBACK fUNCITON!!!!!!
// // arr.filter(() => {}) <-- this is a callback.

// let newArr = arr.filter((element) => { // iterates over element.
//     console.log(element); // prints out each element. (new line).
// }) //<- But will only return the elements that return true. COOL!

// console.log(newArr); // currently empty.


// let newArr2 = arr.filter((element) => {
//     return element > 50; // This is a truthy statement. So it will return when it happens.
// })

// console.log(`newArr2: ${newArr2}`); // <- 100, 200

// // if there's only one variable, you can remove the parens.
// let newArr3 = arr.filter(element => {
//     return element > 50;
// })



// /**
//  * Filter out all the 'FAIL' elements in an array.
//  * 
//  * @examples
//  * ['A+', 'FAIL', 'B', 'FAIL'] -> ['A+', 'B']
//  * ['FAIL', 'FAIL', 'FAIL'] -> []
//  */

// let grades = ['A+', 'FAIL', 'B', 'FAIL'];

// // let passingGrades = grades.filter(grade => {
// //     return grade !== 'FAIL';
// // }) <- only one line, so we can do this:

// let passingGrades = grades.filter(grade => grade !== 'FAIL');

// console.log(`passingGrades: ${passingGrades}`); // <- A+, B 


// /**
//  * Filter out all the 'FAIL' elements in an array.
//  * Without using the Array.filter() method.
//  * 
//  * @examples
//  * ['A+', 'FAIL', 'B', 'FAIL'] -> ['A+', 'B']
//  * ['FAIL', 'FAIL', 'FAIL'] -> []
//  * 
//  */

// let grades = ['A+', 'FAIL', 'B', 'FAIL'];

// let filteredGrades = [];

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== 'FAIL') {
//         filteredGrades.push(grades[i]);
//     }
// }
// console.log(filteredGrades);

// /** MAP!! */
// let arr = [1, 4, 9, 16];

// let newArr = arr.map((element) => { // This replaces each element with the returned value.
//     console.log(element)
//     return undefined; // This makes them all undefined. (return as everything)
// })

// let newArr2 = arr.map(element => undefined); //<- Same thing!! (minus the console.log)


// /**
//  * Turn each element in an array of dollars into cents
//  * 
//  * @examples
//  * [1, 5, 10, 3] => [100, 500, 1000, 300]
//  * [0, 10, 20] => [0, 1000, 2000]
//  */

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map(element => element * 100);

// console.log(cents);

// // OR

// let arrCents = dollars.map((element) => {
//     return element * 100;
// })

// console.log(arrCents);

// // now without using the map method.

// let newCents = [];

// for (let i = 0; i < dollars.length; i++) {
//     newCents.push(dollars[i] * 100);
// }

// console.log(newCents);


/**OBJECTS - used to store multiple properties on one variable */

// let userFirstName = 'David';
// let userLastName = 'Bragg';
// let userDiscoredId = 'David Bragg #0001';
// let userSubscriptionStatus = 'VIP';


// let user = [
//     {
//     username: 'David',
//     email: 'david@frontendsimplified.com',
//     password: 'test123',
//     subscriptionStatus: 'VIP',
//     discordId: 'David Bragg#0001',
//     lessonsCompleted: [0, 1] // <- Used in FES to track lesson ID's that are done.
//     },
//     {
//     username: 'Mitri',
//     email: 'mitri@frontendsimplified.com',
//     password: 'mitri123',
//     subscriptionStatus: 'VIP',
//     discordId: 'Mitri#0001',
//     lessonsCompleted: [0, 1, 2, 3, 4] // <- Used in FES to track lesson ID's that are done.
//     }
// ]

// function login(email, password) {
//     // loop through users and get the object with the one with the email we pass in.
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].email === email) {
//             if (user[i].password === password) {
//                 console.log('log the user in  - the details are correct');
//             }
//             else {
//                 console.log('The password is incorrect - try again');
//             }
//             return;
//         }
//     }
//     console.log("Username not found - please try again.")
// }

// login('david@frontendsimplified.com', 'test123');

// login('doesnotexist@frontendsimplified.com', 'test123');


// console.log(user.username);

// console.log(user.lessonsCompleted);

// // example, mapping the lessons with X2.

// console.log(user.lessonsCompleted.map(element => element *2))

/// Now we're using an array of objects instead of a single object.

// console.log(user[1].lessonsCompleted.map(element => element *2));  //<-aight. that's pretty cool.



// // Example: create a register function!

// /** 
//  * Create a register function that accepts:
//  * - username
//  * - email
//  * - password
//  * - subscriptionStatus
//  * - discordId
//  * - lessonsCompleted
//  * 
//  * Inside your register function:
//  * 1. Create a user object
//  * 2. Push this user object onto the 'users' array
//  */


// let users = [{
//     username: 'tester',
//     email: 'tester',
//     password: 'tester',
//     subscriptionStatus: 'tester',
//     discordId: 'tester',
//     lessonsCompleted: ['tester'],
// }]

// function register(user) {


//     users.push(user);
// }


// // register('yourfellow', 'jfellow@bastiansolutions.com', 'password1', 'VIP', 'fellow#0002', [1, 3, 4, 6, 8]);
// //^^^ bad code example. . interesting. This is why I'm taking the course!

// register({
//     username: "momfellow",
//     email: "meganfellow@email.com",
//     password: "password2",
//     subscriptionStatus: "momVIP",
//     discordId: "momfellow#0003",
//     lessonsCompleted: [1, 3, 4, 6, 8, 9, 10, 11]
// });

// //^^^ better code example. - but this loaded the object as a single element in the array. Username.
// // Why did it work in the course? <- It didn't work. keep watching.

// // Change the function from 6 arguments to an object with 6 properties... and then pass that object in..


// for (let i = 0; i < users.length; i++) {
//     console.log(`user = ${users[i]}`);
//     console.log(`more specifically, the username: ${users[i].username}`)
// }

// console.log(users);

// // DONE up through arrays! Ready for DOM! stopping at 2hr 20 min.ish. Explanation at 2:17

/** DOM - Document Objcet Model */

// // First way to accessan element
// console.log(document.querySelector('#title'));
// //Most common!! can access class. or element.
// console.log(document.querySelector('.title')); //<- this is the best way to access an element with a class.
// console.log(document.querySelector('h1'));  //<- this is the best way to access an element with a tag.
// // what about non-labeled? does it search text?
// console.log(document.querySelector('Joseph')); //<- nope. returns null.



// // Second way to access an element - only works if there's an Id.
// console.log(document.getElementById('title')); //<-- this is best practice. with Id

// document.querySelector('.title').innerHTML = "Hello, World!"; //<- changes the text of the element.

// // Because the js tag is "defer", the script runs after the html is loaded. So it can access the elements.
// // It also loads the changed text of the title to Hello, World!, so line 449 prints "Hello, World!" and not the native text.
// // This raises a lot of scope questions.

// // Change CSS.
// document.querySelector(".title").style.fontSize = "30px"; //<- changes the color of the text to red.

// function changeTitleToRed() {
//     if (document.querySelector(".title").style.color === "red") {
//         document.querySelector(".title").style.color = "black";
//         return;
//     }
//     document.querySelector(".title").style.color = "red";
// }

// // Played around with the color differences. And I'm getting more scope questions.
// // It's good practice, and I need to unload it a littl more.

// function toggleDarkMode() {
//     document.querySelector('body').classList.toggle('dark-theme');
//     if (document.querySelector('.title').style.color === 'red') {
//         document.querySelector('.title').style.color = 'black';
//         return;
//     }
//     document.querySelector('.title').style.color = 'red';
// }

// /**
//  * PROMISES! Toughest thing in JS?
//  */

// // fetch("https://jsonplaceholder.typicode.com/users/1"); //<- this is a promise. It's a promise to get the data.

// const emailRef = document.querySelector(".email");
// console.log(emailRef);
// // 1. Then
// // fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
// //     // console.log(response.json()); // response.json() is also a promise. So we need to chain another .then() to get the data.
// //     response.json().then(data => {
// //         emailRef.innerHTML = data.email;
// //     })
// // }) <-NEsting .then is not best practice.

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         emailRef.innerHTML = data.email
//     });





// 2. Async/Await <- David's favorite and best practice. UNDERSTAND BOTH!

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json();
//     console.log(data);
//     emailRef.innerHTML = data.email;
// }

// main();

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// console.log(sumOfTwoNumbers(15, 30));

// // convert hours into seconds.

// function hoursIntoSeconds(hours) {
//     return hours * 3600;
// }

// console.log(hoursIntoSeconds(2));

// function calcPerimeter(length, width) {
//     return (length + width) * 2;
// }

// console.log(calcPerimeter(6, 7));

// // Q4

// function calcTriangleArea(base, height) {
//     return base * height / 2;
// }

// console.log(calcTriangleArea(20, 30));

// function appendFrontend(str) {
//     return "Frontend " + str;
// }

// console.log(appendFrontend("Simplified"));

// function sumGreaterThan100(num1, num2) {
//     return num1 + num2 > 100;
//     // I never think to just return a boolean! I would have done an if statment.
// }

// console.log(sumGreaterThan100(50, 60));


// // less than or equal to zero? return boolean.

// function lessThanOrEqualToZero(num) {
//     return num <= 0;
// }

// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(10));


// // Q8. Opposite Boolean
// function oppositeBoolean(bool) {
//     return !bool;
// }

// console.log(oppositeBoolean(true));

// // Q9. Is not the number 0.

// function isNotZero(num) {
//     return num !== 0;
// }

// console.log(isNotZero(0));
// console.log(isNotZero(7));
// console.log(isNotZero(null));

// // q10. Calculate the remainder.

// function calcRemainder(num1, num2) {
//     return num1 % num2;
// }

// console.log(calcRemainder(10, 3));

// // q11. Is the number odd?

// function isOdd(num) {
//     return num % 2 !== 0;
// }

// console.log(isOdd(10));
// console.log(isOdd(11));

// // q12. If the number is even return 1, if odd return -1.
// function booleanIntegers(num) {
//     return num % 2 === 0 ? 1 : -1;
// }

// console.log(booleanIntegers(10));
// console.log(booleanIntegers(15));

// // Q13. Check if a user is logged in and subscribed.

// function isLoggedInAndSubscribed(isLoggedIn, isSubscribed) {
//     // if (isLoggedIn === 'LOGGED_IN' && isSubscribed === 'SUBSCRIBED') {
//     //     return true;
//     // }
//     // return false;
//     return isLoggedIn === 'LOGGED_IN' && isSubscribed === 'SUBSCRIBED';
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));

// /**MEDIUM QUESTIONS */

// // Q1. Given two values, return the first on if it is falsy, otherwise return the second one.

// function filterOutFalsy(num1, num2) {
//     return !num1 ? num1 : num2;
// }

// console.log(filterOutFalsy(0, 10));
// console.log(filterOutFalsy(true, 10));

// // Q2. Return thelength of any given array.

// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1, 2, 3, 4, 5]));

// // Q3. Return the last element of the array.

// function lastElement(arr) {
//     return arr[arr.length - 1];
// }

// console.log(lastElement([1, 2, 3, 4, 5]));

// // Q4. Find the sum of an array

// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumOfArray([1, 2, 3, 4, 5]));

// // Q5. Add up numbers from a single number.
// // ex input 4, it adds 1, 2, 3, 4. = 10.

// function progressiveSum(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(progressiveSum(25));

// /** BREAK! stopping medium video at 12:34 */

// // Q6. Calculate the time
// // Given a number in seconds, return this number in mm:ss format.


// function calcTime(sec) {
//     let minutes = Math.floor(sec / 60);
//     let seconds = sec % 60;

//     console.log(`${minutes}:${seconds.toString().padStart(2, '0')}`);
// }

// calcTime(66); // -> "01:06";
// calcTime(50); // -> "00:50";
// calcTime(300); // -> "05:00";

// //nvm wanted to look at the advanced questions.
// // q1. show rating. star = full, '.' = half rating.

// function showRating(rating) {
//     const star = '*';
//     const halfStar = '.';
//     let answer = '';

//     // loop through whole numbers and separate after it equals 1.
//     while (rating >= 1) {
//         answer += star;
//         rating--;
//     }
//     if (rating === 0.5) {
//         answer += halfStar;
//     }

//     console.log(answer);
// }


// showRating(4.5);


// ///// Back to medium.

// // Q7. Find the largest number in an array.
// // Given an array of numbers, return the largest number of that array.


// function getMax(list) {
//     let max = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (list[i] > max) {
//             max = list[i];
//         }
//     }
//     console.log(max);
// }
// getMax([5, 100, 0]); // -> 100
// getMax([12, 10, -20]); // -> 112
// getMax([-300, -100, -200]); // -> -100

// // Q8. Reverse a string
// // Given a string, return the reverse of that string.

// function reverseString(num) {
//     let reversed = '';
//     for (let i = num.length - 1; i >= 0; i--) {
//         reversed += num[i];
//     }
//     console.log(reversed);
// }

// //ex.
// reverseString('abc'); // -> 'cba'
// reverseString('hello'); // -> 'olleh'
// reverseString('This is cool'); // -> 'looc si sihT'


// Q9. Turn Every element in an array into 0.

// Solution 1: For Loop
// Solution 2: Array 'fill'
// Solution 3: Array 'map'

// Solution 1: For Loop
// function convertToZeros(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = 0;
//     }
//     console.log(arr);
// }

// // Solution 2: Array 'fill'
// function convertToZeros(arr) {
//     console.log(arr.fill(0));
// }

// // Solution 3: Array 'map'
// function convertToZeros(arr) {
//     console.log(arr.map(() => 0));
// }

// //examples:

// convertToZeros([5, 100, 0]); // -> [0, 0, 0]
// convertToZeros([12, 10, -20]); // -> [0, 0, 0]
// convertToZeros([-300, -100, -200]); // -> [0, 0, 0]
// convertToZeros([1, 2, 3, 4, 5]); // -> [0, 0, 0, 0, 0]

//Q10. Filter out all the apples.
// Given an array of fruits, if it is an apple remove it from the array.
// solution 1: for loop

// function removeApples(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'apple') {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     console.log(arr);
// }
// // Interesting note! You can use splice to add elements as well. It's a very versatile method.
// // Exmample:
// // let arr = [1, 2, 3, 4, 5];
// // arr.splice(2, 0, 100);
// // console.log(arr); // -> [1, 2, 100, 3, 4, 5]

// // solution 2: array filter
// function removeApples(arr) {
//     console.log(arr.filter(fruit => fruit !== 'apple'));
// }


// //examples
// removeApples(['apple', 'banana', 'apple', 'orange']); // -> ['banana', 'orange']
// removeApples(['apple', 'apple', 'apple']); // -> []
// removeApples(['banana', 'orange']); // -> ['banana', 'orange']
// removeApples(['banana', 'apple', 'orange']); // -> ['banana', 'orange']


// // Q11. Filter out all the falsy values
// // Given an array, remove all falsy values from the array. and only return the truthy values.
// // Solution 1: For Loop
// function filterOutFalsy(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             newArr.push(arr[i]);
//         }
//     }
//     console.log(newArr);
// }

// // // Solution 2: Array 'filter'
// function filterOutFalsy(arr) {
//     console.log(arr.filter(elem => !elem));
// } //^^ and an opposite.

// // Honorable mention: 'console.log(arr.filger(Boolean));' <- this is a cool way to do it. It's a truthy statement.


// // examples

// filterOutFalsy(["", [], 0, null, undefined, "0"]);
// filterOutFalsy(['Tomato', 'Orange', 'Banana', false]);
// filterOutFalsy(['Banana', 'Orange', 'Apple', true, 0, '']); // -> ['Banana', 'Orange', 'Apple', true]

// Q12. Truthy to ture, Falsy to false
// Given an array of truthy and falsy values, return the same array of elements into its boolean value.

function convertToBoolean(arr) {
    console.log(arr.map(elem => !!elem));
}

//example:
convertToBoolean([500, 0, "David", "", []]);
convertToBoolean([true, false, 0, 1, "David", ""]);

// DONE WITH MEDIUM. ON TO ADVANCED.