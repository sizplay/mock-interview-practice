var sample = 'The quick brown fox jumped over the lazy dog';

const longest1 = (str) => {
  return str.split(' ').reduce((pre,next) => {
    return Math.max(pre,next.length);
  },0)
}

console.log('longest1(sample) :', longest1(sample));

const longest2 = (str) => {
  str = str.split(' ');
  let str1 = str[0], str2 = str[1];
  if(str.length == 1) return str1.length;

  if(str1.length >= str2.length) {
    str.splice(1,1);
    return longest2(str.join(' '));
  }

  if (str1.length <= str2.length) {
    return longest2(str.slice(1, str.length).join(' '));
  }
}

console.log('longest2(sample) :', longest2(sample));
