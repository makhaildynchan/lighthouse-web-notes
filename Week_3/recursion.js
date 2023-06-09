// write a program that prints all even numbers from 0 to 12
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
//or
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

//counting all even numbers from 0 to 12.
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
//This is what that problem would look like using recursion instead of a for loop.
function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number+2);
  }
}
countEvenToTwelve(0);

//As long as number <= 12, the function continues to call itself to repeat the code over and over again. As soon as number > 12, the function stops calling itself and the "looping" ends.

// Each time countEvenToTwelve calls itself, on line 4, it passes in a different input value. In this case, each time the function is called, number will be 2 more than it was the last time. So the first time the function is called, number is equal to 0. The second time it's called, number is equal to 2, and so on. Instead of incrementing the number directly, like in the loop, the function calls itself again with a modified input parameter. Every time the function calls itself, number gets bigger and bigger. This is important, because the function will only stop calling itself when number is greater than 12.

// The recursive case is when the function will continue to call itself. Every time the function calls itself, the input gets closer and closer to the base case. The base case is when the function no longer calls itself.
function countEvenToTwelve(number) {
  if (number <= 12) { // Recursive Case
       consolelog(number);
       // The function will call itself again and get closer to the base case
       countEvenToTwelve(number+2);
     }
     // Base case, do nothing when number > 12
   }
   countEvenToTwelve(0);