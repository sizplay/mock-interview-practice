
var sample = 10;

const primes = number => {
  const numbers = new Array(number + 1);
  numbers.fill(true);
  numbers[0] = numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
  }

  return numbers.reduce(
    (arr, val, num) => (val ? arr.concat(num) : arr),
    []
  );
};


console.log('primes(10) :', primes(10));

