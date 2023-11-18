/***********************************************************************Exercises*********************************************************************************/

/* 1. What will the following code log to the console and why? Don't run it until you have tried to answer.

    console.log(greeting);

    var greeting = 'Hello world!';

 /* it will log undefined. 

    All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. 
    This means that our code snippet above behaves like the following one:

    var greeting;

    console.log(greeting);

    greeting = 'Hello world!'

    When a var variable is declared but not assigned a value, like on line 1, it is initialized to the value undefined. 
    For that reason, the code logs undefined to the console. */

/* 2. What will the following code log to the console and why? Don't run it until you have tried to answer.

      console.log(greeting);

      let greeting = 'Hello world!'; */

      /* it will retunr a ReferenceError because greeting wasn't initialized first. */

/* 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

      if (true) {
        let myValue = 20;
      }

      console.log(myValue); */

      /* it will show an error because myValue is defined in a local scope in the if block. */

/* 4. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function myFunction() {
        let a = 1;

        if (true) {
          console.log(a);
        }
      }

      myFunction(); */

      /* it will log 1. */

/* 5. What will the following code log to the console and why? Don't run it until you have tried to answer. */

      /*function myFunction() {
        let a = 1;

        if (true) {
          console.log(a);
          let a = 2;
          console.log(a);
        }
      } 

      myFunction(); */

      /* it will log ReferenceError. 

      Your initial hunch might have been that this code should output the numbers 1 (on line 5) and 2 (on line 7). 
      The reason that doesn't happen is that variables declared by let aren't available until the code runs. 
      Therefore, the let statement on line 6 creates a new variable a that isn't available on line 5. 
      Since we try to log a before assigning it a value, a ReferenceError is raised.
      Technically, the scope of a is the entire block. JavaScript does hoist the variables defined by let, but, 
      when it does, it creates a "temporal dead zone" in which the variable exists but doesn't have a value -- 
      not even a value of undefined. We talk more about the temporal dead zone in a later course.
      Note that the variable a defined on line 6 shadows the variable a defined on line 2. */

/* 6. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let a = 5;
      let b = false;

      if (a > 4) {
        let b = true;
      }

      console.log(b); */

      /* the code logs false because of its scope. */ 

/* 7. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let a = 1;

      function myFunction() {
        console.log(a);
      }

      myFunction(); */

      /* it will log 1. */

/* 8. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let a = 1;

      function myFunction(a) {
        console.log(a);
      }

      let b = 2;

      myFunction(b); */

      /* the code logs 2. */

/* 9. What will the following code log to the console and why? Don't run it until you have tried to answer.

      const a = 1;

      function myFunction() {
        a = 2;
      }

      myFunction(a); */

      /* an eror will be logged since a const cannot be changed. even if it was able to change, nothing would log since there are no return statements. */

/* 10. What will the following code log to the console and why? Don't run it until you have tried to answer.

        const a = {
          firstName: 'John',
          lastName: 'Doe'
        };

        function myFunction() {
          a.firstName = 'Jane';
        }

        myFunction();

        console.log(a); */

        /* it will out put Jane Doe. even though the const is declared, the values can be mutated. its the variable that cannot be reassigned. */



   

