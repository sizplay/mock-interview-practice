function myFunction(arg) {

  // write the body of your function here
  var leftIdx = 0;
  var rightIdx = arg.length - 1;
  var msg = arg;
  while (leftIdx < rightIdx) {
    var temp = msg[leftIdx];
    msg[leftIdx] = msg[rightIdx];
    msg[rightIdx] = temp;
    console.log(msg[leftIdx], msg[rightIdx])
    leftIdx++;
    rightIdx--;
  }


  return 'running with ' + msg;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction('test input'));
