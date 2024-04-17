const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number to store the number of elements in the array: ', (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  let sumArr = arr.reduce((result, current) => {
    return result + current;
  });

  console.log('Sum of array elements:', sumArr);
  console.log('Array:', arr);
  
  rl.close();
});


