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

// -- TERNARY --

let hot = true;

// If hot.. say weather hot. Else, say weather cold.
// Only makes sense for single line response/action.
hot ? console.log('weather is hot outside') : console.log('weather is cold');

let subscribed = true;
let loggedIn = true;

// in this case, the response is returning, so return it to str.
let str = subscribed && loggedIn ? 'show the video': 'no show the video';
console.log(str);

// -- EXERCISE --

let cash = 50;
let price = 40;
let isStoreOpen = true;

let str2 = isStoreOpen && cash >= price ? 'print the receipt': 'no print the receipt';
console.log(str2);