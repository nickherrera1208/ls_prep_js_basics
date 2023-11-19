/***********************************************************************Exercises*********************************************************************************/

/* 1. Write the code necessary to retrieve the value of the courses property of our student object. */

/*let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);*/

/* 2. Given the below object jane, write code that retrieves the country in which Jane is located. */

    /*let jane = {
      firstName: 'Jane',
      lastName: 'Harrelson',
      age: 32,
      location: {
        country: 'Denmark',
        city: 'Aarhus'
      },
      occupation: 'engineer',
    };

    console.log(jane.location.country);*/

/* 3. Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.  */

      /*let fido = {
        name: 'Fido',
        species: 'Labrador Retriever',
        color: 'brown',
        weight: 16,
      };

      fido.age = 3;
      fido['favorite food'] = beef;*/

/* 4. Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console. */
      
      /*let jane = {
        firstName: 'Jane',
        lastName: 'Harrelson',
        age: 32,
        location: {
          country: 'Denmark',
          city: 'Aarhus'
        },
        occupation: 'engineer',
        greet: function(name){ return console.log(`Hej, ${name}!`)}
      };

      jane.greet('Bobby'); // Hej, Bobby!*/

/* 5. Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

      Snippet 1:

        let ocean = {};
        let prefix = 'Indian';

        ocean.prefix = 'Pacific';

        console.log(ocean); // ?
      
      Snippet 2:

        let ocean = {};
        let prefix = 'Indian';

        ocean[prefix] = 'Pacific';

        console.log(ocean); // ? */

       /* snippet 1 will log prefix: pacific and snippet 2 will log indian: pacific */

/* 6. We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

      let obj = {
        num: 42,
        'property name': 'string value',
        true: false,
        fun: function() {
          console.log('Harr Harr!');
        },
      };

      for (let prop in obj) {
        if (prop === true) {
          console.log("It's true!");
        }
      } */

      /* this is because obj properties are turned to strings. */

/* 7. Write code that stores all of the vehicle property names in an array called keys. */

      /*let vehicle = {
        manufacturer: 'Tesla',
        model: 'Model X',
        year: 2015,
        range: 295,
        seats: 7
      }; 

      let keys = Object.keys(vehicle);*/

/* 8. Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

      let person = {
        title: 'Duke',
        name: 'Nukem',
        age: 33
      };

      // Expected output:
      // [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]] */

      /*let person = {
        title: 'Duke',
        name: 'Nukem',
        age: 33
      };

      nestedPerson = Object.entries(person);

      console.log(nestedPerson);*/

/* 9. Write code that does the reverse, starting from a nested array of pairs and building an object.

      let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

      // Expected output:
      // { title: 'Duke', name: 'Nukem', age: 33 } */

      /*let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
      
      let person = Object.fromEntries(nestedArray);

      console.log(person); */

/* 10. Write a function clone that takes an object as argument and returns a shallow copy of that argument. 
       A shallow copy returns a new object that is a copy of the original object. 
       However, only the object itself and any properties with primitive values are duplicated. 
       Properties that are themselves objects are copied "by reference" -- that is, only a pointer to the object is copied.

       For instance, consider the following object:

       let obj = {
          number: 1,
          string: 'abc',
          array: [1, 2, 3],
       };

       If we make a shallow copy of obj, we'll create a new object that has the same 3 properties as obj:

       let objCopy = clone(obj);
       console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

       Note that all 3 properties have the same value. 
       However, what happens if we modify these values in one of the two objects and then inspect both objects?

       objCopy.number = 2;
       objCopy.string = 'xyz';
       objCopy.array.push(4);
       console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
       console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }

       As you might expect, the values for the number and string keys changed in objCopy, but not in obj. 
       However, when we mutated the value of objCopy.array, it also mutated that value of obj.array. 
       That's because a shallow copy only copies pointers for nested objects; since arrays are objects, 
       the shallow copy just copied the pointer to the original array to objCopy. If you're wondering why this happens, 
       you might want to review Variables as Pointers section in the Introduction to JavaScript book.

       function clone(obj) {
          // TODO
        }

        let person = {
          title: 'Duke',
          name: {
            value: 'Nukem',
            isStageName: true
          },
          age: 33
        };

        let clonedPerson = clone(person);
        person.age = 34;

        console.log(person.age);       // 34
        console.log(clonedPerson.age); // 33

        person.name.isStageName = false;
        console.log(person.name.isStageName);       // false
        console.log(clonedPerson.name.isStageName); // false */
        
        /*function clone(obj) {
          // Object.assign(obj);
          let obj1 = Object.assign({}, obj);
          return obj1;
        }

        let person = {
          title: 'Duke',
          name: {
            value: 'Nukem',
            isStageName: true
          },
          age: 33
        };

        let clonedPerson = clone(person);
        person.age = 34;

        console.log(person.age);       
        console.log(clonedPerson.age); 

        person.name.isStageName = false;
        console.log(person.name.isStageName);       
        console.log(clonedPerson.name.isStageName);*/