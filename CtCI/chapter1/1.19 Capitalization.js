const sample = 'hello world';

const capitalization = (str) => {
  let temp = [];
  for (let word of str.split(' ')) {
    temp.push(word[0].toUpperCase() + word.slice(1));
  }
  return temp.join(' ');
}

console.log('capitalization(str) :', capitalization(sample));
