// ** Task 1 ** //
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace
// the missing second character of the final pair with an underscore('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str) {
// add your cod here
// }

// function solution(str) {
//   let i = 0;
//   let result = [];
//   if (str.length % 2 !== 0) {
//     str += '_';
//   }

//   while (i < str.length) {
//     result.push(str[i] + str[i + 1]);
//     i += 2;
//   }
//   console.log('result: ', result);
//   return result;
// }

// const { assert } = require('chai');

// describe('Split Strings', () => {
//   it('Basic tests', () => {
//     assert.deepEqual(solution('abcdef'), ['ab', 'cd', 'ef']);
//     assert.deepEqual(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
//     assert.deepEqual(solution(''), []);
//   });
// });

// ** Task 2 ** //
// Define a function that takes an integer argument and returns a logical value
// true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than
// 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative
// numbers as well (or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most
// trivial solutions might time out.Numbers go up to 2 ^ 31(or similar, depending on
// language).Looping all the way up to n, or n / 2, will be too slow.

// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

function isPrime(num) {
  //TODO
}

const Test = require('@codewars/test-compat');

describe('Basic', () => {
  it('Basic tests', () => {
    Test.assertEquals(isPrime(0), false, '0 is not prime');
    Test.assertEquals(isPrime(1), false, '1 is not prime');
    Test.assertEquals(isPrime(2), true, '2 is prime');
    Test.assertEquals(isPrime(73), true, '73 is prime');
    Test.assertEquals(isPrime(75), false, '75 is not prime');
    Test.assertEquals(isPrime(-1), false, '-1 is not prime');
  });

  it('Test prime', () => {
    Test.assertEquals(isPrime(3), true, '3 is prime');
    Test.assertEquals(isPrime(5), true, '5 is prime');
    Test.assertEquals(isPrime(7), true, '7 is prime');
    Test.assertEquals(isPrime(41), true, '41 is prime');
    Test.assertEquals(isPrime(5099), true, '5099 is prime');
  });

  it('Test not prime', () => {
    Test.assertEquals(isPrime(4), false, '4 is not prime');
    Test.assertEquals(isPrime(6), false, '6 is not prime');
    Test.assertEquals(isPrime(8), false, '8 is not prime');
    Test.assertEquals(isPrime(9), false, '9 is not prime');
    Test.assertEquals(isPrime(45), false, '45 is not prime');
    Test.assertEquals(isPrime(-5), false, '-5 is not prime');
    Test.assertEquals(isPrime(-8), false, '-8 is not prime');
    Test.assertEquals(isPrime(-41), false, '-41 is not prime');
  });
});
