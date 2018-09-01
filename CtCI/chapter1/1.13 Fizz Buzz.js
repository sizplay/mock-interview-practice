//divisible by 2 print Fizz
//divisible by 3 print Buzz
//divisible by both 2,3 print Fizz Buzz

const sample = 30;

const fizzbuzz = (num) => {
  let print = '';
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 & i % 3 === 0) print = 'Fizz Buzz';
    else if (i % 2 === 0) print = 'Fizz';
    else if (i % 3 === 0) print = 'Buzz';
    else print = i;
    console.log(i, print);
  }
}

fizzbuzz(sample);
