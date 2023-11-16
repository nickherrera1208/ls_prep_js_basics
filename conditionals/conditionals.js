/***********************************************************************Exercises*********************************************************************************/

/* 1. Without looking at your notes or MDN, try to recall all values that count as falsy in JavaScript. */

    /* falsy values are 0, -0, null, NaN, undefined, false, '', "" */
    /* also 0n 9BigInt zero)

/* 2. The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed.
      Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

      let randomNumber = Math.round(Math.random()); */

      /*let randomNumber = Math.round(Math.random());

      if (randomNumber === 1){
        console.log('No');
      } else {console.log('Yes')}; */

/* 3. Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator. */

      /*let randomNumber = Math.round(Math.random());

      randomNumber === 1 ? console.log('No') : console.log('Yes!'); */

      // i can remove the === 1 since it will check if randomNumber is truthy

/* 4. Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

      Write an if statement that logs:

      "It's a beautiful day!" if weather is assigned to the string "sunny",
      "Grab your umbrella." if weather is assigned to the string "rainy", and
      "Let's stay inside." otherwise.
      Test your code with different values for weather. */

      /*let weather = 'sunny';

      if (weather === 'sunny') {
        console.log("It's a beautiful day!");
      } else if (weather === 'rainy') {
        console.log('Grab your umbrella.');
      } else {
        console.log("Let's stay inside.");
      }*/

/* 5. Take a look at the code below. Without running it, determine what it will log to the console. 
      If you're not sure, refer to the MDN documentation on switch statements. 

      let animal = 'horse';

      switch (animal) {
        case 'duck':
          console.log('quack');
        case 'squirrel':
          console.log('nook nook');
        case 'horse':
          console.log('neigh');
        case 'bird':
          console.log('tweet tweet');
        default:
          console.log('*cricket*');
      } */

      // will log 'neigh', 'tweet tweet', and 'cricket' to the console becasue there are no break statements. 

/* 6. Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. 
      Feel free to add more cases besides 'sunny' and 'rainy'. */

      /*let weather = 'sunny';

            switch(weather){
              case 'sunny':
                console.log("It's a beautiful day!");
                break;
              case 'rainy':
                console.log("Grab your umbrella.");
                break;
              default:
                console.log("Let's stay inside.");
            }*/

/* 7. Predict the output of the following code:

      if (false || true) {
        console.log('Yes!');
      } else {
        console.log('No...');
      } */

      /* logs 'Yes! */

/* 8. Predict the output of the following code:

      if (true && false) {
        console.log('Yes!');
      } else {
        console.log('No...');
      } */

      /* output is No... */

/* 9. Without running the below code, determine what will be logged to the console.

      let sale = true;
      let admissionPrice = !sale ? 5.25 : 3.99;

      console.log('$' + admissionPrice); */

      /* 3.99 will be logged */

/* 10. Determine what the following code snippet logs. 
      First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

      let speed = 0;
      let acceleration = 24;
      let brakingForce = 19;

      let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

      console.log(isMoving);   */

      /* it will log true */

      /* Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

      let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0; */

      /* We needed the parenthesis because the && takes precedence over ||. */











