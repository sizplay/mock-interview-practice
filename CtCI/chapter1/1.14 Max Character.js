//return the most often character in a string

const sample = 'Hello World!';

const max = (str) => {
  const obj = {};
  str.toLowerCase();
  let max = 0, char = '';
  // for(let i = 0; i < str.length; i++) {
  //   obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
  // }

  for (let char of str) obj[char] = obj[char]++ || 1;

  for(let variable in obj) {
    if (max < obj[variable]) {
      max = obj[variable];
      char = variable;
    }
  }
  return char;
}
console.log(max(sample));
