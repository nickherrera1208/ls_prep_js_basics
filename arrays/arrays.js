/***********************************************************************Exercises*********************************************************************************/

/* 1. Write a function that returns the first element of an input array. For example:

      first(['Earth', 'Moon', 'Mars']); // 'Earth' */

      /*function first(array){
        return array[0];
      }*/

/* 2. Write a function that returns the last element of an input array. For example:

      last(['Earth', 'Moon', 'Mars']); // 'Mars' */

     /* function last(array){
        return array[array.length - 1];
      } */

/* 3. We are given the following array of energy sources.

      let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion']; 

      Remove 'fossil' from the array, then add 'geothermal' to the end of the array. */

      /*let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion']; 

      energy.splice(energy.indexOf('fossil'),1);
      energy.push('geothermal');

      console.log(energy); */

      // i can also use .shift() to remove the first element. 

/* 4. Split the string alphabet into an array of characters.

      let alphabet = 'abcdefghijklmnopqrstuvwxyz'; */

      /*let alphabet = 'abcdefghijklmnopqrstuvwxyz';

      let split = alphabet.split('');
      console.log(split); */

/* 5. Count the number of elements in scores that are 100 or above.

      let scores = [96, 47, 113, 89, 100, 102]; */

      /*let scores = [96, 47, 113, 89, 100, 102];

      let above100 = scores.filter(i => i > 100).length;

      console.log(above100); */

/* 6. We've been given an array of vocabulary words grouped into sub-arrays by meaning. 
      This is a two-dimensional array or a nested array. 
      Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

      let vocabulary = [
        ['happy', 'cheerful', 'merry', 'glad'],
        ['tired', 'sleepy', 'fatigued', 'drained'],
        ['excited', 'eager', 'enthused', 'animated']
      ];

      // Expected output:
      // happy
      // cheerful
      // merry
      // etc... */

      /*let vocabulary = [
        ['happy', 'cheerful', 'merry', 'glad'],
        ['tired', 'sleepy', 'fatigued', 'drained'],
        ['excited', 'eager', 'enthused', 'animated']
      ];

      for (let i = 0; i < vocabulary.length; i++) {
        for (let j = 0; j < vocabulary[i].length; j++) {
          console.log(vocabulary[i][j]);
        }
      } */

/* 7. Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

      let array1 = [2, 6, 4];
      let array2 = [2, 6, 4];

      console.log(array1 === array2); */

      /* false because they have a different address */

/* 8. How can you check whether a variable holds a value that is an array? For example, 
      imagine you start writing a function and want to check whether its argument is an array:

      function filter(input) {
        // Is input an array?
      } */

      /*function filter(input) {
        return input.constructor === Array;
      }

      let array1 = [2, 6, 4];
      console.log(filter(array1)); */

      /* LS Answer

      Array.isArray(array1); */

/* 9. The destinations array contains a list of travel destinations.

      let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
        'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
        'Marrakesh', 'New York City'];

        Write a function that checks whether or not a particular destination is included within destinations, 
        without using the built-in method Array.prototype.includes().

        For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, 
        whereas the expected output for 'Nashville' is false.

        contains('Barcelona', destinations); // true
        contains('Nashville', destinations); // false */

        /* let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
        'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
        'Marrakesh', 'New York City'];

        function contains(destination, list) {
          for (let i = 0; i < list.length; i++) {
            if (list[i] === destination) {
              return true;
            }
          } return false;
        }

        console.log(contains('Praue', destinations)); */

/* 10. We generated parts of a passcode and now want to combine them into a string. 
       Write some code that returns a string, with each portion of the passcode separated by a hyphen (-). 

       let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

      // Write some code here.
      // Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs' */

      /* let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

      let password = passcode.join('-');

      console.log(password); */

/* 11. We have made a grocery list, and as we check off items on that list, we would like to remove them.
       Write code that removes the items from 'groceryList' one by one, until it is empty. 
       If you log the elements you remove, the expected behavior would look as follows. 

       let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

        // Your code.

        // logs:
        // paprika
        // tofu
        // garlic
        // quinoa
        // carrots
        // broccoli
        // hummus

        groceryList; // [] */

        /* let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
        let i = groceryList.length;

        while (i > 0) {
          groceryList.pop();
          i--;
        }

        console.log(groceryList); */

        /* LS Answer 

        while (groceryList.length > 0) {
        let checkedItem = groceryList.shift();

        console.log(checkedItem); 
        } */


