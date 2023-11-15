/***********************************************************************Exercises*********************************************************************************/

/* 1. Add some code inside of the for loop below that logs the current value of i to the console on each iteration. 
      Before you run the code: What sequence of numbers do you expect to be logged? */

    /*for (let i = 0; i <= 10; i += 2) {
      console.log(i);
    }

    i expect 0, 2, 4, 6, 8, 10 */

/* 2. The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

      for (let i = 1; i <= 10; i += 1) {
        console.log(i);
      } */

      /*for (let i = 10; i >= 1; i -= 1) {
        console.log(i);
        if (i === 1){
          console.log('Launch!');
        }
      } */

/* 3. Write a loop that logs greeting three times. */

      /* let greeting = 'Aloha!';

      for (let i = 0; i < 3; i++){
        console.log(greeting);
      } */

/* 4. Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2. */

      /*for (let i = 0; i <= 100; i++){
        console.log(i*2);
      } */

/* 5. Using the code below as a starting point, write a while loop that logs the elements of array at each index, 
      and terminates after logging the last element of the array. */

     /* let array = [1, 2, 3, 4];
      let index = 0;

      while(index < array.length){
        console.log(array[index]);
        index++;
      } */

/* 6. Take a moment to read the MDN documentation on the continue statement. 
      Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. 
      If the element is null, skip forward to the next iteration without logging anything to the console. */

      /*let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
      
      for (let i = 0; i < cities.length; i++){
        if (cities[i] === null){
          continue;}
        
          console.log(cities[i].length);
      } */

/* 7. The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration. 
      
      for (let i = 0; ; i += 1) {
        console.log("and on");
      }*/

      /*for (let i = 0; i < 1; i += 1) {
        console.log("and on");
      } */

      // there was missing code in the for loop conditionals. 

 



