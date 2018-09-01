const sample = 'aaadddwwwqqqaassddff';

let dup = new Set(sample);
let text = '';
dup.forEach(du => text += du);
//console.log(text);

const duplicate = (str) => {
  let text = sample[0];
  for (let i = 1; i < sample.length; i++) {
    if (str[i - 1] !== str[i]) text += str[i];
  }
  return text;
}

//console.log(duplicate(sample));

var names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];

const duplicates = (arr) => {
  return arr.sort().filter((item, index, array) => {
    return item != array[index - 1];
  })
}

//console.log('result: ', duplicates(names));

const duplicates2 = (arr) => {
  return [...new Set(arr)];
}

console.log(duplicates2(names));
