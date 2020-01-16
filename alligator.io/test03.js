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
  console.log(Date.now());
  const [a, b, c] = await Promise.all([who(), what(), where()]);
  console.log(`Parallel: ${a || ''}  ${b || ''} ${c || ''}`);
  console.log(Date.now());
}

msg();
