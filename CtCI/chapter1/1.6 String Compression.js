//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

const sample = 'aabcccccaaa';
const sample2 = 'agebcfwswada';
//--------------------------------------------------------------------
const compression = (str) => {
  if (!str || str.length < 2) return str;
  let temp = '', count = 1;
  for(let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) count++;
    else {
      temp += `${str[i - 1]}${count}`;
      count = 1;
    }
    if (i === str.length -1) temp += `${str[i]}${count}`;
  }
  if (temp.length > str.length) return str;
  else return temp;
}

console.log(compression(sample2));
console.log(compression(sample2));
