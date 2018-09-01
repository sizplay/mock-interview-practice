const sample = 'lkjasdnoiuowehifvbpwoeiutrthgbncvmxcoiwuyjcslda';
const sample2 = 'abcd';

const vowels = (str) => {
  const vowel = 'aeiou';
  let count = 0;
  for (let char of str.toLowerCase()) {
    //if (vowel.indexOf(char) > -1) {
    if(vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log('vowels(sample) :', vowels(sample));
