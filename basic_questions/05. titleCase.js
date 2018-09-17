
const sample = "I'm a little tea pot";

const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(word => {
    return `${word[0].toUpperCase()}${word.slice(1, word.length)}`
  }).join(' ');
}

console.log('titleCase(sample) :', titleCase(sample));
