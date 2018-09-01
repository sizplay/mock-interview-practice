const sample = [['A', 3], ['C', 4], ['B', 4], ['A', 2], ['B', 9]];

const combine = (arr) => {
  const obj = {}, arr2 = [];
  // for(let i = 0; i < arr.length; i++) !obj[arr[i][0]] ? obj[arr[i][0]] = arr[i][1] : obj[arr[i][0]] += arr[i][1];

  for (let variable in arr) obj[arr[variable][0]] = obj[arr[variable][0]] + arr[variable][1] || arr[variable][1];

  for (let i in obj) arr2.push([i, obj[i]]);
  return arr2;
}

console.log(combine(sample));
