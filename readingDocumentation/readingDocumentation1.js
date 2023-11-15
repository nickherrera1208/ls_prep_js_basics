/***********************************************************************Exercises*********************************************************************************/

/* 1. What is an excellent destination when looking for JavaScript documentation?

    The mozilla documentation: mdn
    stack overflow
    google

/* 2. Find out whether JavaScript has a method to lowercase a string, for example converting 'Aloha, World!' into 'aloha, world!. 

      let hw = 'hello world'
      hw.toLowerCase()*/

/* 3. Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'? There is no built in method. A function needs to be made*/

      /*let hw = 'hello world';
      function capitalize(input){
        let capitalized = input[0].toUpperCase() + input.slice(1);
        return capitalized;
      }
    
      console.log(capitalize(hw));*/

/* 4. Locate the documentation for the Array built-in object on MDN. 
      How can we access the element 'and' in the array ['fish', 'and', 'chips']? */

      /*let arr = ['fish', 'and', 'chips'];
      console.log(arr[1]); */

/* 5. What happens if we take the array ['fish', 'and', 'chips'] and try to access the element at index position 10? Try this in your JavaScript console. */

      // It returns undefined 
  
/* 6. What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help. 

      let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

      trees[trees.length - 1];
      trees.pop();
      trees[trees.length - 1]; */

      // first one returns the last element in the array, 'palm tree'
      // the second one shows the last element of the array that it removed, 'palm tree'. 
      // the third statement returns the last element in the mutated array, 'sequoia'

/* 7. Look up the MDN documentation for the typeof operator. What is its return value? Determine what the following statements will return:

      typeof 23.5;
      typeof 'Call me Ishmael.';
      typeof false;
      typeof 0;
      typeof null;
      typeof undefined; */

      /* number, string, boolean, number, object, undefined.  null being an object is a historic bug in js that cannot be fixed. */

/* 8. Consider the following code snippet:

      let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

      let words = tweet.split(' ');
      let isValid = tweet.length < 140;

      What will the following statements return?

      typeof tweet;
      typeof words;
      typeof isValid; */

      /* string, array, boolean */

/* 9. Given the following tweet:

      let tweet = 'Starting to get the hang of it... #javascript #launchschool';

      What will the following statements evaluate to?

      tweet.split(' ');
      tweet.split(' ').reverse();
      tweet.split(' ').reverse().join(' ');

      Reference the documentation to learn about the return value of each method. */

      /*  first statement will output an array where each word of the string is an element
          second statement will output an array where each word of string is an element and reverse the elements so that the last word is first and so on. 
          thhrid statement will repeat the same thing as second but will return the array elements to a string */

/* 10. In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. 
       Take a look at the MDN documentation on equality comparisons to read about how == and === differ. 

       console.log('8' == 8);
       console.log('8' === 8); */

       /* the first one outputs true because it coerces the number to a string and compares it. second comparison includes the data type and is therefore false.*/



