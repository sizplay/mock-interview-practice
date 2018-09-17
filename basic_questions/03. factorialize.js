
const factorial = (num) => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

console.log('factorial(5) :', factorial(5));

const factorial2 = (num)=> {
  if(num == 0) return 1;
  return num *= factorial2(num - 1);
}

console.log('factorial2(5) :', factorial2(5));

const factorial3 = (num) => {
  for (var a = 1; num >= 1; num--) {
    a *= num;
  }
  return a;
}

console.log('factorial3(5) :', factorial3(5));
