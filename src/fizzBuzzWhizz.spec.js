import { game, isPrime, words } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should return number as a string', () => {
    const result = game(1);
    expect(result).toEqual('1');
  });
  test('should return Fizz if is divisible by 3', () => {
    [6, 9, 12, 18].map((number) => {
      const result = game(number);
      expect(result).toEqual(words.fizz);
    });
  });
  test('should return Buzz if is divisible by 5', () => {
    [10, 20, 25, 50].map((number) => {
      const result = game(number);
      expect(result).toEqual(words.buzz);
    });
  });
  test('should return FizzBuzz if is divisible by 3 and 5', () => {
    [15, 30, 45].map((number) => {
      const result = game(number);
      expect(result).toEqual(words.fizz.concat(words.buzz));
    });
  });
  test('should return Whizz if the number is prime', () => {
    [2, 7].map((number) => {
      const result = game(number);
      expect(result).toEqual(words.whizz);
    });
  });
  test('should return FizzWhizz if divisible by 3 and prime', () => {
    const result = game(3);
    expect(result).toEqual((words.fizz.concat(words.whizz)));
  });
  test('should return FizzWhizz if divisible by 5 and prime', () => {
    const result = game(5);
    expect(result).toEqual((words.buzz.concat(words.whizz)));
  });
});

describe('Prime function', () => {
  test('should return true if is prime number', () => {
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(number => expect(isPrime(number)).toBeTruthy());
  });
});

