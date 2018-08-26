
// Is unique: implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

//time: O(N)
//space: O(N)
const isUnique1 = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) { //space O(N)
    !obj[str[i]] ? obj[str[i]] = 1 : obj[str[i]]++;
  }
  for (let j = 0; j < str.length; j++) { //time O(N)
    if (obj[str[j]] !== 1) return false;
  }
  return true;
}

const str1 = 'abcderfgktpq';
const str2 = 'abcderfgktpa';
const str3 = 'abdfbrghhdgqssscderfgktpa';

console.log(isUnique1(str1));

//time O(nlogn)
//space O(1)
const isUnique2 = (str) => {
  str.split('').sort().join(''); //time O(nlogn)
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) return false;
  }
  return true;
}
console.log(isUnique2(str1));

//Set
//time: O(N)
//space: O(N)
const isUnique3 = (str) => {
  const char = new Set();
  for (let i = 0; i < str.length; i++) { //time: O(N)
    if (char.has(str[i])) return false;
    char.add(str[i]); //space: O(N)
  }
  return true;
}
console.log(isUnique3(str2));
