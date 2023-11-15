/***********************************************************************Exercises*********************************************************************************/

/* 1. In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.

let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.'); */


/*let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log(`The ${iceCreamTaste} ice cream melted.`);*/

/* 2. Without looking into your notes, try to remember which primitive data types are defined in JavaScript. Then find this information on MDN.

      numbers, strings, booleans, null, undefined, numbers, symbol, bigint */

/* 3. Using the documentation, determine how we can find the largest numeric value that can be represented in JavaScript. 
      Write a line of code that returns this value. */

      // console.log(Number.MAX_VALUE);

/* 4. Find the MDN documentation on operator precedence, and use it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to. */

      // 20.9

/* 5. Find out what Date.now() returns. */

  /* console.log(Date.now()); returns 1700036276570. It's the number of milliseconds that elapsed since the epoch, 
     which is defined as the midnight at the beginning of January 1, 1970, UTC. */

/* 6. The MDN page for Date lists two methods to get the year of a date.

      let today = new Date();

      today.getYear();
      today.getFullYear();

      What is the difference between the two methods and which one should you use? */

      /*let today = new Date();
      console.log(today.getYear());
      console.log(today.getFullYear()); */

      /* getYear has been deprecated. It is an integer representing the year for the given date according to local time, minus 1900. 
         getFullYear outputs the year. in this case it outputted 2023. */
        
/* 7. How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments? */

      /*let str = ['this', 'is', 'a', 'sentence'];

      console.log(str.join('', '.'));

      it expects one argument. if there are none it will join with a comma by default. if there are more than one arguments it only use first argument. */

/* 8. Find out how we can join two or more strings together. */

      /*let str1 = "this will be joined.";
      let str2 = "this is joined now";
      let str3 = str1 + str2;
      console.log(str3); */

/* 9. The below code raises a SyntaxError. If you run the code, you'll see the following error message:

      SyntaxError: Unexpected token &&

      Find and read the documentation about this error on MDN. Then, fix the code.

      let speedLimit = 60;
      let currentSpeed = 80;

      if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
        console.log('"People are so bad at driving cars ' +
          'that computers don\'t have to be that good to be much better." ' +
          '-- Marc Andreessen');
      } */

     /* let speedLimit = 60;
      let currentSpeed = 80;

      if ((currentSpeed > speedLimit) && (currentSpeed - speedLimit > 5)) {
        console.log('"People are so bad at driving cars ' +
          'that computers don\'t have to be that good to be much better." ' +
          '-- Marc Andreessen');
      } */

/* 10. Run the following code.

        let tweet = 'Woohoo! :-)';

        if (tweet.length() > 140) {
          console.log('Tweet is too long!');
        }

        You'll see that it raises an error:

        TypeError: tweet.length is not a function

        Check the documentation of both TypeError and length, in order to find out what causes the error. */

        /*let tweet = 'Woohoo! :-)';

        if (tweet.length > 140) {
          console.log('Tweet is too long!');
        }

        it was the () after length that caused the error. this is because length is a property, not a function. */





