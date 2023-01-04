/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.
 */

function sum () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    let num = arguments[i];
    // Reemplaza el número introducido por 0 si no es un número natural
    num = /^\d+$/.test(num) ? num : "0";
    sum += parseInt(num, 10);
  }
  return sum;
}
  
  export { sum };