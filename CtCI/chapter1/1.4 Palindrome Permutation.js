const sample = 'tact coa';

//--------------------------------------------------------------------
//time O(N)
//space O(N)
const palindrome = (str) => {
  if(!str) return false;

  str = str.split` `.join``;
  const obj = {};
  let total = Math.floor(str.length / 2), count = 0;
  let odd = 1, oddCount = 0;

  //insert string to hash table
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
  }
  //if str.length is even number
  if (str.length % 2 === 0) {
    for (let property in obj) {
      if (obj[property] === 2) count++;
    }
    return count === total;
  } else { //if str.length is odd number
    for (let property in obj) {
      if (obj[property] === 2) count++;
      if (obj[property] === 1) oddCount++;
    }
    if (count === total && odd === oddCount) return true;
    else return false;
  }
}

console.log(palindrome(sample));

//--------------------------------------------------------------------
function isPalindromePermutationsSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str) {
    if (char !== ' ') { // ignore spaces
      if (chars.has(char)) {
        chars.delete(char);
      }
      else {
        chars.add(char);
      }
    }
  }

  return chars.size <= 1;
}

console.log(isPalindromePermutationsSet(sample))
