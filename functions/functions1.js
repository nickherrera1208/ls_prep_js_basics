/***********************************************************************Exercises*********************************************************************************/

/* 1. Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. 
      You may assume that the function arguments will always be numbers. 

      sum(22, 10); // 32 */

      /*function sum(num1, num2){
        return num1 + num2;
      }

      console.log(sum(22, 10)); */

/* 2. Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?

      brendanEichQuote();
      // logs:
      // Always bet on JavaScript. */

      /*function brendenEichQuote() {
        return console.log('Always bet on JavaScript.');
      }

      brendenEichQuote();*/

/* 3. Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: 
      the author of the quote and what they said. It then logs the quote to the console, as in the following example.

      cite('Brendan Eich', 'Always bet on JavaScript.');
      // logs:
      // Brendan Eich said: "Always bet on JavaScript." */

      /*function cite(str1, str2){
        return console.log(`${str1} said: ${str2}.`);
      }

      cite('nick h', 'this is a test'); */

/* 4. Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2 
      (also known as squaring the number).
      
      squaredNumber(3); // 9 */

      /* function squaredNumber(num){
        return num ** 2;
      }

      console.log(squaredNumber(3)); */

/* 5. Determine the output that the following code will log to the console.

      function multiplesOfThree() {
        let divisor = 1;

        for (let dividend = 3; dividend <= 30; dividend += 3) {
          console.log(dividend + ' / ' + divisor + ' = 3');
          divisor += 1;
        }
      }

      multiplesOfThree; */

      /* it won't output anything because it is missing () to invoke the function. if it did have () it will log numbers up to 30 for dividend and 10 
         for divisor and log a string that shows each multiple equals 3. */

/* 6. Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, 
      and 0 if they're of equal length, as in the following example: 

      compareByLength('patience', 'perseverance'); // -1
      compareByLength('strength', 'dignity');      //  1
      compareByLength('humor', 'grace');           //  0


