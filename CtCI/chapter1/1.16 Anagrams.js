const sample1 = "hello world"
const sample2 = "world hello";
const sample3 = "hellow world";
const sample4 = "hello there";
const sample5 = "hello there!";

const anagrams = (str1, str2) => {
  const obj = {};
  for (var word of str1.split(' ')) obj[word] = obj[word] + 1 || 1;
  for (var words of str2.split(' ')) obj[words] = obj[words] + 1  || 1;

  for (let idx in obj) {
    if (obj[idx] % 2 !== 0)
      return false;
  }

  return true;
}

console.log(anagrams(sample4, sample5))
