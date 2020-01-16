/*
* Print numbers sequentially.
*/

const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

// Implementation One (Using for-loop)
const printNumbers = () => new Promise((resolve) => {
  let pr = Promise.resolve(0);
  for (let i = 1; i <= 10; i += 1) {
    pr = pr.then((val) => {
      console.log(val);
      return wait(i, Math.random() * 1000);
    });
  }
  resolve(pr);
});

// Implementation Two (Using Recursion)

const printNumbersRecursive = () => {
  return Promise.resolve(0).then(function processResult(i) {

    if (i === 10) {
      return undefined;
    }

    return wait(i, Math.random() * 1000).then((val) => {
      console.log(val);
      return processResult(i + 1);
    });
  });
};

async function printNumbersUsingAsync(){
  for (let i = 0; i < 10; i++) {
    await wait(i, Math.random() * 1000);
    console.log(i);
  }
  console.log('=======');
}

// Uncomment one at a time to print
async function run() { 
  console.log("***** printNumbers *****");
  await printNumbers();
  console.log("***** printNumbersRecursive *****");
  await printNumbersRecursive();
  console.log("***** printNumbersUsingAsync *****");
  await printNumbersUsingAsync().then(console.log);
}

run();