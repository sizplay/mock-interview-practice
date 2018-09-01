const sample = 'Hello World!';
const sample2 = ['a','b','c','d','e','f'];
const sample3 = 1234;

const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString(sample));

const reverseArr = (arr) => arr.reverse();
console.log(reverseArr(sample2));

const reverseInt = (num) => Number(num.toString().split('').reverse().join(''));
console.log(typeof reverseInt(sample3));

