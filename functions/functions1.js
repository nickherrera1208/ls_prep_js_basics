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
      compareByLength('humor', 'grace');           //  0 */

      /*function compareByLength(string1, string2){
        switch(true) {
          case (string1.length < string2.length):
            return -1;
            break;
          case (string2.length < string1.length):
            return 1;
            break;
          default:
            return 0;
            break;
          }
        }
      
        console.log(compareByLength('patience', 'perseverance'));
        console.log(compareByLength('strength', 'dignity'));
        console.log(compareByLength('humor', 'grace')); */

/* 7. Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.*/

      /*let captain = 'Captain Ruby';
      captain = captain.replace('Ruby', 'JavaScript');
      console.log(captain);*/

/* 8. Write a function that takes an ISO 639-1 language code and returns a greeting in that language. 
      You can take the examples below or add whatever languages you like.

      greet('en'); // 'Hi!'
      greet('fr'); // 'Salut!'
      greet('pt'); // 'Olá!'
      greet('de'); // 'Hallo!'
      greet('sv'); // 'Hej!'
      greet('af'); // 'Haai!' */

      /*function isoToGreeting(code){
        switch(code){
          case 'en':
            return 'Hi!';
          case 'fr':
            return 'Salut!';
          case 'pt':
            return 'Ola!';
          case 'de':
            return 'Hallo!';
          case 'sv':
            return 'Hej!';
          case 'af':
            return 'Haai!';
        }
      }

 console.log(isoToGreeting('de'));
 // note that there is no need for a break statement when i use return. return will automatically exit the program. */

 /* 9. Write a function that extracts the language code from a locale. 
       A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

        extractLanguage('en_US.UTF-8');  // 'en'
        extractLanguage('en_GB.UTF-8');  // 'en'
        extractLanguage('ko_KR.UTF-16'); // 'ko' */

   /* function extractLanguage(code){
      return code.slice(0,2);
    }

    console.log(extractLanguage('en_US.UTF-8'));
    console.log(extractLanguage('en_GB.UTF-8'));
    console.log(extractLanguage('ko_KR.UTF-16')); */

/* 10. Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

        extractRegion('en_US.UTF-8');  // 'US'
        extractRegion('en_GB.UTF-8');  // 'GB'
        extractRegion('ko_KR.UTF-16'); // 'KR' */

        /*function extractRegion(code){
          return code.split('_').join(',').split('.').join(',').split(',')[1];
        }
        console.log(extractRegion('en_US.UTF-8')); */

        /* LS Version

            function extractRegion(locale) {
              return locale.split('.')[0]
                  .split('_')[1];
            } */
/* 11. Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. 
       The locale allows us to greet people from different countries differently also when they share the language, for example:

        localGreet('en_US.UTF-8'); // 'Hey!'
        localGreet('en_GB.UTF-8'); // 'Hello!'
        localGreet('en_AU.UTF-8'); // 'Howdy!'

        Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, 
        and feel free to fall back on the language-specific greetings in all other cases, for example:

        localGreet('fr_FR.UTF-8'); // 'Salut!'
        localGreet('fr_CA.UTF-8'); // 'Salut!'
        localGreet('fr_MA.UTF-8'); // 'Salut!'

        When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises. */

        /*function extractRegion(locale) {
          return locale.split('.')[0]
              .split('_')[1];
        } 
        
        function extractLanguage(code){
          return code.slice(0,2);
        }

        function localGreet(locale){
          // let country = locale.split('.')[0].split('_')[0];
          // let lang = locale.split('.')[0].split('_')[1];

          let lang = extractRegion(locale);

          if (lang === 'US') {
            return 'Hey!';
          }
          else if (lang === 'GB') {
            return 'Hello!';
          }
          else if (lang === 'AU') {
            return 'Howdy!';
          }
          else if ((lang === 'FR') || (lang === 'CA') || (lang === 'MA')) {
            return 'Salut!'
          }
          else return "Not Working!";
        }

        console.log(localGreet('en_US.UTF-8')); */
   