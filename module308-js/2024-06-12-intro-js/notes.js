/*
    This is a multi line comment -
    I am using these to separate each section of notes
*/

// I will use single line comments for my notes and explanations

// Start with this just to make sure it ran
// the following line runs this file (be sure to be in the directory that the file is in)
// node notes.js
console.log('this ran');

/*
    ===== Reserved Words =====
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
//      ***** go to identifiers section
// ***** looking at reserved words versus other in how they show up in vscode
let num = 5;
// ***** if you uncomment the line below, it will cause an error because var is reserved
// let var = 7;
let num2 = 8.9;
var num3 = 7;
const newWord = 'fine';
// ***** this is also a reserved word
// const super = 'what?';
console.log(num);
console.log(newWord);

/*
    ===== Console.log =====
*/
// ***** for console.log, we need strings or variables in the (), 
//      ***** we can also use numbers or booleans
// console.log(this won't work);
console.log('string need to be in quotes');
console.log("double quotes also work");
// ***** this string closes with the apostrophe/single quote in won't
// console.log('this won't work');
console.log('this won\'t work');
console.log("this won't work");
// ***** this works because it's a number
console.log(223);
console.log('223');
// ***** this works because true/false are reserved and boolean (we'll explain more about that later)
console.log(true);
console.log('true');

/*
    ===== Data Types =====
*/
// ***** First, let's list all the data types
//  ***** Numbers - all numbers (integers and floats(decimals))
//  ***** String
//  ***** Boolean
//  ***** Null - does not belong to any type described above.
//          Its purpose is to indicated that there is no value
//          Null is an empty or non-existent value, and must be assigned.
// ***** Undefined - indicates that a variable has not been assigned a value or null.
//          Variables are often declared without a value.
//          The value could be something that has yet to be calculated or something that will be provided by a user or other entity
// ***** Objects
// ***** Arrays

// ***** In order to show examples, we need to know how to DECLARE a variable
//          variable declarations can use one of three key words: let, var, and const
//          var and let can both be changed, but the difference is _scope_
//          const is not reassignable with primitive data types
//          we will talk about scope more later, but you should use let rather than var
// ***** examples:
var stringOne = 'this is a string example';
let stringTwo = 'this is another string example';
const stringThree = 'this is a constant string example';
// ***** notice that stringThree is a different color than the others because it is a constant, so we can't change that value
// ***** notice that there are no spaces in the variable names, 
//          we are using camel case, which means the first letter is capitalized in each word after the first one
//          we used kabob case in html (string-three), which means spaces are replaced with hyphens
console.log(stringOne);
console.log(stringTwo);
console.log(stringThree);
stringOne = 'this is changed';
console.log(stringOne);
// stringThree = 'new value';

/*
    ===== typeof() =====
*/
// ***** using the variables that we already declared and initialized check the typeof value that was assigned
//          to each variable.  
// ***** we need to console.log() so we can see what typeof returns
console.log('=======================================================');
console.log('===== typeof examples =====');
console.log(typeof(num));
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(stringOne));
console.log(typeof(stringTwo));
console.log(typeof(stringThree));
console.log(typeof(brandNewVar));
let notInitVar;
console.log(typeof(notInitVar));

// ***** what is the difference between the last two?
// ***** SCOPE
//      https://www.programiz.com/javascript/variable-scope#:~:text=Note%3A%20In%20JavaScript%2C%20var%20is,visit%20JavaScript%20let%20vs%20var 
brandNewVar = 7;
notInitVar = 7;

// ***** when would we use const with primitives
//          note that I used all capital letters for my constant, that is convention
const PI = 3.14;

/*
    ===== Arithmetic Operators =====
*/
// ***** The + operator, which returns the addition of two values
//          e.g.    3 + 4 returns 7
// ***** The - operator, which returns the subtraction of two values
//          e.g.    3 - 2 returns 1
// ***** The * operator, which returns the multiplication of two values
//          e.g.    6 * 4 returns 24
// ***** The / operator, which returns the division of two values
//          e.g.    16 / 8 returns 2
// ***** The % (modulo or mod) operator, which returns the remainder after division of two values
//          e.g.    14 % 3 return 2 because 14 divided by 3 is 4

console.log('=======================================================');
console.log('===== arithmetic examples =====');

// console.log(3+4);
// console.log(3-2);
// console.log(6*4);
// console.log(16/8);
// console.log(14%3);
// ***** If i don't console.log or save my answer to a variable then it lost or gone, so we generally save to a variable
// ***** create a variable
// let answer;
// ***** assign the return value to the variable
// answer = 3 + 4;
// console.log(answer);

// ***** Some examples
let arithmetic1 = 10;
let arithmetic2 = -1;
let arithmetic3 = 9;
let arithmetic4 = 0;
let arithmetic5 = 2;

// ***** adding with +
console.log('now we are adding');
console.log(arithmetic1 + arithmetic2);
console.log(arithmetic2 + arithmetic3);

// ***** subtracting with - 
console.log("now we're subtracting");
console.log(arithmetic4 - arithmetic1);
console.log(arithmetic1 - arithmetic3);

// ***** multiplying with *
console.log('now we are multiplying');
console.log(arithmetic1 * arithmetic5);
console.log(arithmetic2 * arithmetic5);
console.log(arithmetic1 * arithmetic4);

// ***** dividing with /
console.log("now we're dividing");
console.log(arithmetic1/arithmetic5);
console.log(arithmetic3/arithmetic5);
console.log(arithmetic1/arithmetic4);

// ***** finding the remainder with % 
console.log("now we're finding the remainder with mod");
console.log(arithmetic1 % arithmetic5);
console.log(arithmetic3 % arithmetic5);
console.log(arithmetic1 % arithmetic3);
console.log(arithmetic3 % arithmetic1);
console.log(arithmetic1 % arithmetic4);



/*
    ===== shortcuts for arithmetic operators =====
*/
console.log('=======================================================');
console.log('===== arithmetic shortcut examples =====');

let newNumber = 10; 
newNumber = newNumber + 1; // replace the value with the intial value +1
console.log(newNumber);

newNumber = 10; // resetting to the same value so that we can see that the two act the same
newNumber += 1;
console.log(newNumber);

// this works for all five main operations, and you use the shorthand with any value

newNumber = 9;
newNumber -= 3; // replace the value with 9(the original value) - 3 = 6
console.log(newNumber);
newNumber /= 3; // 6/3 = 2, so i expect newNumber to now equal 2
console.log(newNumber);
newNumber *= 3; // newNumber is now equal to 6
console.log(newNumber);
newNumber %= 3; // newNumber is now equal to 0
console.log(newNumber);

// ***** This next one only works for +1 and -1
//          there is an even more special shorthand
//          instead of += 1, you can use ++
//          instead of -= 1, you can use --
newNumber++;
console.log(newNumber);
newNumber--;
console.log(newNumber);

/*
    ===== Comparison Operators =====
        ===== where we use booleans =====
*/
// ***** these operators all return true or false

console.log('=======================================================');
console.log('===== comparison operator examples =====');

// ***** > is strictly greater than
console.log(">");
console.log(5 > 4);
console.log(4 > 4);
console.log(4 > 5);

// ***** >= is greater than or equal to
console.log(">=")
console.log(5 >= 4);
console.log(4 >= 4);
console.log(4 >= 5);

// ***** < is strictly less than
console.log("<");
console.log(5 < 4);
console.log(4 < 4);
console.log(4 < 5);

// ***** <= is less than or equal to
console.log("<=")
console.log(5 <= 4);
console.log(4 <= 4);
console.log(4 <= 5);

// ***** There are three different equals operators
// *****    = is the assignment operator
// *****    == - loosely equals - checks if two values are equal to each other
// *****    === - strictly equals - checks if two values are equal to each other and they have the same type
console.log('using ==');
console.log(3 == 3);
console.log(3 == '3');
console.log('3' == '3');

console.log('using ===');
console.log(3 === 3);
console.log(3 === '3');
console.log('3' === '3');

console.log('adding a string to a number');
console.log("3" + 1);

// ***** There is also != and !== 
//          these are not equal operators
//          these will be true when the matching equals is false
console.log('using !=');
console.log(3 != 3);
console.log(3 != '3');
console.log('3' != '3');

console.log('using !==');
console.log(3 !== 3);
console.log(3 !== '3');
console.log('3' !== '3');

/*
    ===== Logical Operators
*/
// ***** && - AND
// ***** both things (or all the things) need to be true
console.log('the AND (&&) output');
console.log('everything is true if i see true');
console.log((3 > 1) && (9 === 9)); // both are true
console.log((3 > 1) && (9 === 0)); // the first is true but the second is not
console.log((3 < 1) && (9 === 9)); // the first is false and the second is true
console.log((3 < 1) && (9 === 0)); // they are both false

// ***** || - OR
// ***** ANY thing can be true for the output to be true
console.log('the OR (||) output');
console.log('at least one thing is true if i see true');
console.log((3 > 1) || (9 === 9)); // both are true
console.log((3 > 1) || (9 === 0)); // the first is true but the second is not
console.log((3 < 1) || (9 === 9)); // the first is false and the second is true
console.log((3 < 1) || (9 === 0)); // they are both false

// ***** ! negation 
console.log('negation');
console.log(!true);
console.log(!false);
/*
    ===== String Concatenation =====
*/
console.log('=======================================================');
console.log('===== String concatenation examples =====');
console.log("Hello" + "world") // outputs: Helloworld
console.log("Hello" + " " + "World") // outputs: "Hello World"
console.log("Hello","World") // outputs: "Hello World"
console.log("The number is: " + 5); // outputs: "The number is: 5"
console.log(5);

/*
    ===== String Access =====
*/
let nameVar = "Inigo Montoya";
console.log(nameVar);
console.log(nameVar[2]); // output: i
// ***** the computer starts counting at 0
console.log("Hello World"[4]) // output: o
nameVar[2] = "X";
console.log(nameVar);

console.log("a" < "b");
console.log("a" < "B");
console.log("A" < "b");
// ***** the order of the lowercase and uppercase letters matters (how they are encoded)
console.log("a" < "A");
console.log("A" < "a");
console.log("A" == "a");
console.log("A" === "a");

// ***** you can see if two strings are completely identical
console.log('hi' === 'hi');
console.log('bye' === 'hi');
console.log("Hi" === 'hi');

/*
    ===== Template Literals
*/
let tempLit = 25;
console.log("this is my variable tempLit: " + tempLit);
console.log("this is my variable tempLit:", tempLit);
// ***** template literals allows you to combine variables with those strings (literals) 
//          this only works with backticks
console.log(`this is my variable tempLit: ${tempLit} and then I'm going to talk about it more`);
console.log("this is my variable tempLit: ${tempLit} and then I'm going to talk about it more");





