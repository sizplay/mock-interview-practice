var sample = 'The quick brown fox jumped over the lazy dog';

const longest = (str) => {
  var max = 0;
  str.split(' ').forEach(char => {
    if (max < char.length) max = char.length;
  })
  return max;
}

console.log('longest(sample) :', longest(sample));
