/***********************************************************************Exercises*********************************************************************************/

/* 1. How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is 
      passed to the function invocation? 

      function greet(greeting) {
        console.log(greeting + ', world!');
      }

      greet('Salutations'); // logs: Salutations, world!

      greet();              // logs: undefined, world!
                            // should log: Hello, world! */

      /*function greet(greeting= 'Hello') {
        console.log(greeting + ', world!');
      } */

/* 2. Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, 
      and a recipient with 'world' as default value. The behavior should then be as follows:

      greet();                                // logs: Hello, world!
      greet('Salutations');                   // logs: Salutations, world!
      greet('Good morning', 'Launch School'); // logs: Good morning, Launch School! */

      /*function greet(greeting= 'Hello', recipient = 'world') {
        console.log(greeting + ',' + recipient + '!');
      } */

/* 3. Now we are going to outsource the greeting and recipient to functions. 
      Change the function greet from the previous exercise, so that it doesn't take any arguments, 
      and instead calls the functions greeting and recipient defined below.

       function greeting() {
        return 'Good morning';
      }

      function recipient() {
        return 'Launch School';
      } 

      Calling greet() should log Good morning, Launch School! to the console. */

      /*function greeting() {
        return 'Good morning';
      }

      function recipient() {
        return 'Launch School';
      } 

     function greet() {
      return `${greeting()}, ${recipient()}!`;
     }

     console.log(greet()); */

/* 4. Create a function that calculates a person's body mass index (BMI). 
      It should take two parameters: someone's height (in cm) and weight (in kg). 
      The formula for calculating the BMI is as follows: 

      bmi = weightInKilograms / heightInMeters**2;

      Note that formula requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).
      Return the result as a string rounded to two decimals. For example:

      calculateBMI(180, 80); // "24.69" */

      /*function calculateBMI(height, weight) {
        let heightInMeters = height /100;
        let bmi =  weight / heightInMeters ** 2;
        return bmi.toString().slice(0,5);
      }

      console.log(calculateBMI(180, 80)); */

      //  can also use toFixed(2) instead of toString and slice 

/* 5. Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

      The first human year corresponds to 15 cat years.
      The second human year corresponds to 9 cat years.
      Every subsequent human year corresponds to 4 cat years.

      For example:

        catAge(0); // 0
        catAge(1); // 15
        catAge(2); // 24
        catAge(3); // 28
        catAge(4); // 32 */

         /*function catAge(age) {
          let sum = 0;
          let i = 0;

          while (i < 1) { 
            sum += 15; 
            i++;
          }
          while (i < 2) {
            sum += 9
            i++;
          }
          sum += (age - 2) * 4;
          return sum;
        } 

        console.log(catAge(2)); */

        /* LS Answer 

          function catAge(humanYears) {
            switch(humanYears) {
              case 0:
                return 0;
              case 1:
                return 15;
              case 2:
                return 24;
              default:
                return 24 + (humanYears - 2) * 4;
            }
          } */

/* 6. Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

      removeLastChar('ciao!'); // 'ciao'
      removeLastChar('hello'); // 'hell' */

      /*function removeLastChar(string) {
         return string.slice(0, string.length-1);
      }

      console.log(removeLastChar('word'));*/

/* 7. Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

      const template = 'I VERB NOUN.';

      function sentence(verb, noun) {
        return template
          .replace('VERB', verb)
          .replace('NOUN', noun);
      }

      console.log(sentence('like', 'birds'));
      // logs: I like birds. */

      /*const template = 'I VERB NOUN.';

      let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);
      
      console.log(sentence('like', 'birds'));*/

/* 8. The function initGame below returns an object. Refactor it using arrow function syntax.

      let initGame = function () {
        return {
          level: 1,
          score: 0
        }
      };

      let game = initGame();

      console.log('Level: ' + game.level);
      console.log('Score: ' + game.score); */
      
      /* let initGame = () =>( {  
        level: 1,
        score: 0 
      });

      let game = initGame();
      console.log('Level: ' + game.level);
      console.log('Score: ' + game.score); */


      