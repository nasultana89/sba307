/*
    ===== TYPES OF LOOPS THAT WE WILL COVER =====
    - for
    - for .. in 
    - for .. of
    - while
    - do .. while
    - labeled statements
*/

/*
    ===== for loops =====
*/
// ***** General Syntax:
//      for(initialization; condition; afterthought) { 
//          statements
//      }
// ***** initialization - have a starting condition using a variable
// ***** condition - value of that variable that cause us to consider this complete
// ***** afterthought - changing the value of the variable to step through the iterations

// start with i = 0
// check if i < 10
// if it is, then go in to the loop statements {}
//      after those are executed, increment i by 1
// if i is not less than 10, you are done
for (let i=0; i<10; i++) {
    // console.log(i);
}

// you can have any initial condition, any condition to end, and you can change the variable however you want
for (let i=7; i>3; i--) {
    // console.log(i);
}

for (let i=26; i>0; i -= 3) {
    // console.log(i);
    if (i < 10) {
        // console.log('less than 10');
    }
    else if (i < 20) {
        // console.log('less than 20');
    }
}

// ===================================================================
//
//      Exercises
//
// ===================================================================

// count down from 10 to 1
console.log('===== count down from 10 to 1 =====');
for (let i=10; i>=1; i--) {
    console.log(i);
}

// output odd numbers from 1 to 10
console.log('===== output odd numbers from 1 to 10 =====');
for (let i=1; i<=10; i++) {
    if (i%2 === 1) {
        console.log(i);
    }
}

console.log('===== another way =====');
for (let i=1; i<=10; i+=2) {
    console.log(i);
}

// output even numbers from 1 to 10
console.log('===== output even numbers from 1 to 10 =====');
for (let i=1; i<=10; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}

console.log('===== another way =====');
for (let i=2; i<=10; i+=2) {
    console.log(i);
}

// output multiples of 3, starting at 6 and ending at 60
for (let i=6; i<=60; i+=3) {
    console.log(i);
}

// output an increasing number of symbols
// ***** we need to declare outString outside of the for loop
//          so that it persists after an individual iteration.
let outString = '';
for(let i=0; i<7; i++) {
    outString = outString + '#';
    console.log(outString);
}

// iteratates 1 to 20

for (i=1; i<=20; i++) {
    // prints even for even numbers
    if (i%2 === 0) {
        console.log('even');
    }
    // prints odd for odd numbers
    if (i%2 === 1) {
        console.log('odd');
    }
    // print out prime for all prime numbers
    //  5, 7, 11, 13, 17, 19
    if (i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
        console.log("prime");
    }
}

console.log('===== another way =====');

// modifying the above to only print out one statement per number/iteration
for (i=1; i<=20; i++) {
    // print out prime for all prime numbers
    //  5, 7, 11, 13, 17, 19
    if (i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19) {
        console.log(i, "is prime");
    }
    // prints even for even numbers
    else if (i%2 === 0) {
        console.log(i, 'is even');
    }
    // prints odd for odd numbers
    else if (i%2 === 1) {
        console.log(i, 'is odd');
    }

}
