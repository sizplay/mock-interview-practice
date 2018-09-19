

const truncateString = (str, num) => {
  if(str.length > num && num > 3) {
    return str.slice(0, num - 3) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0,num) + '...';
  } else return str;
}

console.log('("Orange",1):', truncateString('Orange', 1));
console.log('("Orange",3):', truncateString('Orange', 3));
console.log('("Orange",7):', truncateString('Orange', 7));

const truncateString2 = (str, num) => {
  if (str.length > num)
    return str.slice(0, (num > 3) ? num - 3 : num) + '...';
  return str;
}

console.log('("Orange",1):', truncateString2('Orange', 1));
console.log('("Orange",3):', truncateString2('Orange', 3));
console.log('("Orange",7):', truncateString2('Orange', 7));
