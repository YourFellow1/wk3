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

let userFirstName = 'David';
let userLastName = 'Bragg';
let userDiscoredId = 'David Bragg #0001';
let userSubscriptionStatus = 'VIP';


let user = [
    {
    username: 'David',
    email: 'david@frontendsimplified.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'David Bragg#0001',
    lessonsCompleted: [0, 1] // <- Used in FES to track lesson ID's that are done.
    },
    {
    username: 'Mitri',
    email: 'mitri@frontendsimplified.com',
    password: 'mitri123',
    subscriptionStatus: 'VIP',
    discordId: 'Mitri#0001',
    lessonsCompleted: [0, 1, 2, 3, 4] // <- Used in FES to track lesson ID's that are done.
    }
]

function login(email, password) {
    // loop through users and get the object with the one with the email we pass in.
    for (let i = 0; i < user.length; i++) {
        if (user[i].email === email) {
            if (user[i].password === password) {
                console.log('log the user in  - the details are correct');
            }
            else {
                console.log('The password is incorrect - try again');
            }
            return;
        }
    }
    console.log("Username not found - please try again.")
}

login('david@frontendsimplified.com', 'test123');

login('doesnotexist@frontendsimplified.com', 'test123');


// console.log(user.username);

// console.log(user.lessonsCompleted);

// // example, mapping the lessons with X2.

// console.log(user.lessonsCompleted.map(element => element *2))

/// Now we're using an array of objects instead of a single object.

console.log(user[1].lessonsCompleted.map(element => element *2));  //<-aight. that's pretty cool.



// Example: create a register function!

/** 
 * Create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 * 
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the 'users' array
 */


let users = [{
    username: 'tester',
    email: 'tester',
    password: 'tester',
    subscriptionStatus: 'tester',
    discordId: 'tester',
    lessonsCompleted: ['tester'],
}]

function register(username, email, password, subscriptionStatus, discordId, lessonsCompleted) {
    let user = {username: username,
        email: email,
        password: password,
        subscriptionStatus: subscriptionStatus,
        discordId: discordId,
        lessonsCompleted: lessonsCompleted
    }

    users.push(user);
}


register('yourfellow', 'jfellow@bastiansolutions.com', 'password1', 'VIP', 'fellow#0002', [1, 3, 4, 6, 8]);

for (let i = 0; i < users.length; i++) {
    console.log(`user = ${users[i]}`);
    console.log(`more specifically, the username: ${users[i].username}`)
}

// DONE up through arrays! Ready for DOM! stopping at 2hr 20 min.ish. Explanation at 2:17