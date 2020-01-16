function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡');
    }, 200);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks');
    }, 300);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 500);
  });
}

async function msg() {
  let a, b, c;
  console.log(Date.now());
  a = await who();
  console.log(`${a || ''}  ${b || ''} ${c || ''}`);
  b = await what();
  console.log(`${a || ''}  ${b || ''} ${c || ''}`);
  c = await where();
  console.log(`${a || ''}  ${b || ''} ${c || ''}`);
  console.log(Date.now());
}

msg();
