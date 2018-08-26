const sample = 'Mr John Smith';

//--------------------------------------------------------------------
const urlify1 = (str) => str ? str.split` `.join`%20` : str;

console.log(urlify1(sample,13));

//--------------------------------------------------------------------
const urlify2 = (str, count) => {
  let arr = str.split('');
  for(let i = count - 1; i >= 0; i--) {
    if(arr[i] === ' ') arr[i] = '%20';
  }
  return arr.join('');
}

console.log(urlify2(sample, 13));
