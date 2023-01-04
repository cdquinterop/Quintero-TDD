/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld1'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/


export const sumOfIntegersInString = (str) => {
  let sum = 0;
  // Use a regular expression to find all the integers in the string
  let ints = str.match(/\d+/g);
  if (ints) {
    // If there are any integers, add them up
    for (let i = 0; i < ints.length; i++) {
      sum += parseInt(ints[i], 10);
    }
  }
  return sum;
}

