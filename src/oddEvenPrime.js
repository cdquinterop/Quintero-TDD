/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
- If number is odd print 'Odd' instead of the number.
- If number is even print 'Even' instead of number.
- Print number as a string, if number is Prime.
 */
export const words = Object.freeze({
    even: 'even',
    odd: 'odd',
  })

export const game = (ini, end) => {
    var result = [];
    for (let numero = ini; numero <= end; numero++) {
        if (isPrime(numero)){
            result.push(numero.toString());
        } else if (numero % 2 == 0) {
            result.push(words.even);
        } else {
            result.push(words.odd);
        }
    }
    return result
};

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};