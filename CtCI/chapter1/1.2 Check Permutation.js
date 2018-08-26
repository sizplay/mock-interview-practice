const sample1 = 'abcdefghi';
const sample2 = 'ihgfedcba';
const sample3 = '1234567812345678';
const sample4 = '8877665544332211';
const sample5 = '1234567812345678';
const sample6 = '8877665544332221';

//--------------------------------------------------------------------
//time O(nlogn)
const permutation1 = (str1, str2) => {
  return str1.split``.sort().join`` == str2.split``.sort().join``;
}

console.log('permutation1(sample1, sample2) :', permutation1(sample3, sample4));
//--------------------------------------------------------------------
//time O(N)
//space O(N)
const permutation2 = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false
  }
  const obj1 = {}, obj2 = {};
  for(let i = 0; i < str1.length; i++) {
    !obj1[str1[i]] ? obj1[str1[i]] = 1 : obj1[str1[i]]++;
    !obj2[str2[i]] ? obj2[str2[i]] = 1 : obj2[str2[i]]++;
  }
  for (let j = 0; j < str1.length; j++) {
    if (obj1[str1[j]] !== obj2[str1[j]]) return false;
  }
  return true;
}

console.log('permutation2(sample3, sample4) :', permutation2(sample3, sample4));
console.log('permutation2(sample5, sample6) :', permutation2(sample5, sample6));

//--------------------------------------------------------------------
function checkPermutations2(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;

  const letterMap = new Map();

  for (const letter of str1) {
    letterMap.set(letter, letterMap.get(letter) + 1 || 1);
  }

  for (const letter of str2) {
    if (!letterMap.has(letter)) return false;
    if (letterMap.get(letter) === 1) letterMap.delete(letter);
    else letterMap.set(letter, letterMap.get(letter) - 1);
  }

  return !letterMap.size;
}
