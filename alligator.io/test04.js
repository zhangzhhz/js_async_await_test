async function hello() { // `async` turns the return value into a promise.
  return 'Hello Alligator';
}

const b = hello();
console.log(b);

(() => {
  const b = hello();
  b.then(x => console.log(`02: ${x}`));
})();

(async () => {
  const b = await hello();
  console.log(`03: ${b}`);
})();

console.log("===================");
