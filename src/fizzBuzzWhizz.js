/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
  export const words = Object.freeze({
    fizz: 'Fizz',
    buzz: 'Buzz',
    whizz: 'Whizz'
  })
  
  export const game = (num) => {
    let msg = '';
    if (num % 3 === 0) {
      msg = msg.concat(words.fizz);
    }
  
    if (num % 5 === 0) {
      msg = msg.concat(words.buzz);
    }
  
    if (isPrime(num)) {
      msg = msg.concat(words.whizz);
    }
  
    return resultMessage(msg, num);
  };



  
  const resultMessage = (message, num) => {
    const trim = message.trim();
    if (trim.length > 0) {
      return trim;
    }
  
    return String(num);
  }
  

  
  export const isPrime = num => {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    } 
    return num > 1;
  }