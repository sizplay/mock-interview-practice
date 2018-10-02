
const mutation = (arr) => {
  return arr[0].toLowerCase().indexOf(arr[1].toLowerCase()) > -1;
}
console.log('mutation() :', mutation(['hello', 'Hello']));
console.log('mutation() :', mutation(['Alien', 'lien']));
