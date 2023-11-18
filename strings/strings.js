/***********************************************************************Exercises*********************************************************************************/

/* 1. Determine the length of the string "These aren't the droids you're looking for.".*/

    // console.log("These aren't the droids you're looking for.".length);

/* 2. Take the string 'confetti floating everywhere' and transform it to upper case. */

/*let str = 'confetti floating everywhere'.toUpperCase();
console.log(str); */

/* 3. Implement a function repeat that repeats an input string a given number of times, 
      as shown in the example below; without using the pre-defined string method String.prototype.repeat().

      repeat(3, 'ha'); // 'hahaha' */

      /*function repeat(reps, string) {
        let i = 0
        let res = [];
        while (i < reps) {
          res.push(string);
          i++;
        }
        return res.join('');
      }

      console.log(repeat(3, 'ha'));*/

      /* LS Answer

      function repeat(n, string) {
      let repetitions = '';

      while (n > 0) {
        repetitions += string;
        n -= 1;
      }

      return repetitions;
    } */

/* 4. Take the following rhyme:

      A pirate I was meant to be!
      Trim the sails and roam the sea! 
      
      How can you assign this string to a single variable, preserving the line break? */

      /*let rhyme = 'A pirate I was meant to be! \nTrim the sails and roam the sea! ';

      console.log(rhyme); */

/* 5. Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case? */

     /* let string1 = 'Polar Bear';
      let string2 = 'Polar bear';
      let string3 = 'Penguin'; 

      console.log(string1.toLowerCase() === string2.toLowerCase()); */

/* 6. Write code that checks whether the string byteSequence contains the character x. */

      /*let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu'; 

      console.log(byteSequence.includes('x')); */

/* 7. Write a function that checks whether a string is empty or not. For example:

      isBlank('mars'); // false
      isBlank('  ');   // false
      isBlank('');     // true */

     /* function isBlank(string) {
        return string.length < 1 ? true : false;
      }

      console.log(isBlank('  ')); */

/* 8. Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

      isBlank('mars'); // false
      isBlank('  ');   // true
      isBlank('');     // true */

      /*function isBlank(string) {
        return string.trim().length === 0;
      }

      console.log(isBlank('mars'));
      console.log(isBlank('  '));  
      console.log(isBlank('')); */
      
/* 9. Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'. */

      /* let str = 'launch school tech & talk';
      str = str.split(' ');
      for (let i = 0; i < str.length; i ++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1,str[i].length); 
      }
      console.log(str); */

      /* LS Answer 
        let string = 'launch school tech & talk';
        let words = string.split(' ');
        let capitalizedWords = [];

        for (let i = 0; i < words.length; i++) {
          let word = words[i];

          capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
        }

        capitalizedWords.join(' '); // 'Launch School Tech & Talk' */


      



