const sample = 'eyadaye';

const palindrome = (str) => {
  let first = 0;
  let last = str.length - 1;
  while (first < last) {
    if (str[first] !== str[last]) return false;
    first++, last--;
  }
  return true;
}

console.log('palindrome() :', palindrome(sample));
