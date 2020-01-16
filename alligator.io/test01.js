function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡')
    }, 2000);
  });
}

async function msg() {
  const msg = await scaryClown();
  console.log(`Message: ${msg}`);
}

console.log('01...');
(async function() {
  console.log('000001...');
  await msg();
  // msg();
  console.log('000002...');
})();
console.log('02...');