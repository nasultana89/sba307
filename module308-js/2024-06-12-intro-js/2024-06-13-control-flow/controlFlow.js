/*
/   Scope will be covered more thoroughly shortly, but in order to talk about code blocks...
/   Scope defines where variables and functionality can be accessed.
*/

/*
    ===== Code Blocks =====
*/
// ***** These describe chunks of code that are within the same scope
//          Usually delimited by a pair of curly braces {}
//          Usually combined with other JS functionality like conditionals or functions or loops

// ***** Because these variables are created at the top level of the script, they are valid at all levels of the script
let x = 10;
let y = 5;
// console.log("x is:", x, "and y is:", y);
// let z = x + y;

{
    // ***** if I declare z in here, it is only valid in here
    //          out of these {}, it does not exist
    let z = x + y;
    // console.log(" in the {} x is:", x, "and y is:", y);
    // console.log(" in the {} z is:", z);
}

// ***** You get the error that z is not defined because it was only valid in the {}
//          once I leave those {} z is destroyed
// console.log("z is:", z);

/*
    ===== Scope =====
/ ***** Global Scope - valid everywhere - (so if you use var instead of let)
/           but we want to avoid this because it creates the potential for unintentionally overwriting variables later
/ ***** Module Scope - we'll learn more about this later
/ ***** Function Scope - we'll talk about this when we learn about functions (soon)
/ ***** Block Scope - valid only within the BLOCK OF CODE that is was created in {}
*/

// This code from the notes was modified from mdn code that can be found here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// note that I had to change the variable name from x to ex because I have already declared a variable x
// look at the error that you get if you keep that x variable name

// console.log('_________________________________________');
{
    var ex = 1;
    {
        var ex = 2;
        // console.log(ex);
    }
    // console.log(ex);
}

console.log('_________________________________________');
{
    let ex = 1;
    {
        let ex = 2;
        // console.log(ex);
    }
    // console.log(ex);
}

/*
    ===== Control Flow and Conditionals
*/
// ***** There are a few different options
//          if (condition) {code to execute}
//          if (condition) {code to execute} else {alternative code} 
//              you only execute one set of {}
//          if (condition) {code to execute} else if (new condition) {different code} else {alternative code} 
//              you STILL only execute one set of {}
// ***** Remember = is assignment and == or === are both checking for equality of the values
//          you do not need {} if there is only one line, but you DO need them any time there is more than one line of code that you want to execute if a conditon is true
//          using {} can help with readability when you are learning

x = 10;
// console.log('if but not else');
if (x === 10) {
    // console.log('x is 10');
    // this ONLY prints when x is 10;
}

// console.log('i always print');

console.log('_________________________________________');
// console.log('if with else');
if (x === 10) {
    // console.log('x is 10');
    // this ONLY prints when x is 10;
} else {
    // console.log('x is NOT 10');
    // this will print every time x is not 10
}

// console.log('i always print');

console.log('_________________________________________');
let isRaining = true;
if (isRaining) {
    // console.log('I am bringing my umbrella');
}

let age = 6;
if (age > 15) {
    // console.log('you are old enough to have a drivers license');
} else {
    // console.log('you are NOT old enough to have a drivers license.')
}

/*
/ "Truthy" and "Falsy"
/   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
/   https://developer.mozilla.org/en-US/docs/Glossary/Falsy
/   https://www.w3schools.com/js/js_booleans.asp
*/
// Why would I want to use this?

// ***** To check if my variable exsits and is initialized
// let newVar;
// if (newVar) {
//     console.log('i can do things with newVar');
// } else {
//     console.log('this is not defined and initialized = there is no value');
// }

/*
    ===== Nested if/else statements =====
*/

// let isHungry = true, hasGroceries = true;
// if (isHungry) {
//     // do something in order to eat
//     console.log("I should eat");
//     if (hasGroceries) {
//         console.log('make food');
//     } else {
//         console.log('buy food');
//     }
// } else {
//     console.log("I won't eat right now");
// }

/*
    ===== Chaining if/else statements =====
/ ***** ORDER MATTERS
*/

let temp = 50;
// this if/else is assuming temp is celsius
if (temp >= 100) {
    console.log('temp is at least boiling');
}
else if (temp >= 50) {
    console.log('temp is hot');
}
else if (temp >= 25) {
    console.log('temp is warm');
}
else if (temp > 0) {
    console.log('temp is above freezing');
} else {
    console.log('temp is freezing');
}

// one way that we use mod is to see if things are odd or even
let numCheck = 5;
if (numCheck % 2 === 0) {
    console.log('number is even');
} else {
    console.log('number is odd');
}

/*
/   Exercises
*/
let num = 100;
if (num >= 0) {
    // it is positive, but now i need to check if it's greater than 100
    if (num > 100) {
        console.log('greater than 100')
    } else {
        console.log('less than or equal to 100')
    }

} else {
    // if it's negative, we are here0
    console.log('negative');
}

let grade = 70;
if (grade >= 90) {
    console.log("A");
}
else if (grade >= 80) {
    console.log("B");
}
else if (grade >= 70) {
    console.log("C");
} else if (grade >= 55) {
    console.log("D");
} else {
    console.log("F");
}

/*
    ===== Switch Statements =====
*/
let num1 = 5;
let num2 = 4;
let operand = '+';
// ***** switch is the keyword (reserved word) that tells us we're about to do a specific kind of statement
// ***** operand is the value that we have
// ***** and we will compare it to the value in each case
console.log('_________________________________________');
switch (operand) {
    // ***** if (operand === "+")
    case "+":
        console.log(num1 + num2);
        break;
    // ***** if (operand === "-")
    case "-":
        console.log(num1 - num2);
        break;
    // ***** if (operand === "*")
    case "*":
        console.log(num1 * num2);
        break;
    // ***** if (operand === "/")
    case "/":
        console.log(num1 / num2);
        break;
    // ***** else
    default:
        console.log('invalid operand');
        break;
}
console.log('_________________________________________');

// Seasons
let currSeason = 'winter';
switch (currSeason) {
    case 'winter':
        console.log('it is winter and it is cold!');
        break;
    case 'spring':
        console.log('it is spring and things are growing');
        break;
    case 'summer':
        console.log('it is summer and it is HOT!');
        break;
    case 'fall':
        console.log('it is fall and leaves are turning');
        break;
    default:
        console.log('that is not a season that i recognize');
        break;
}

console.log('_________________________________________');

/*
    ===== Ternary Operators =====
*/
// ***** General Syntax:
//      (conditional) ? (value if true) : (value if false)
// ***** COMPARE TO
//          if (conditional) {
//              (value if true)
//          } else {
//              (value if false)
//          }

x = 0;
let isTen;

if (x == 10) {
    isTen = true;
} else {
    isTen = false;
}
console.log(isTen);

x = 10;
// ***** ternary example
(x == 10) ? isTen = true : isTen = false;
// ***** this is the same
// isTen = (x == 10) ? true : false;

console.log(isTen);

/*
    ===== Errors =====
    ===== Try/Catch
*/
// ***** try { something that could result in an error } catch { do something if there is an error }

x = -10;
try {
    if (x < 0) {
        console.log('Negative!');
    } else {
        throw "Error - I don't know what I'm doing!";
    }
} catch (error) {
    console.log(error);
} finally {
    console.log('this runs if there is an error or if there is no error')
}

console.log("Does this log?");

/*
    ===== Break, Continue, and Return
*/
// ***** Break - get out of the loop or switch or conditional completely
// ***** Continue - move to the next iteration of a loop
// ***** Return - goes with functions, and we will learn more about it when we get to functions



