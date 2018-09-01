const sample = [1, 2, 3, 4, 5];

const chunk = (arr, size) => {
  return [arr, arr.splice(size)];
}

console.log(chunk(sample, 5))
