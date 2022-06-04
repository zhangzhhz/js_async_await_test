
// node-fetch v3.5 onwards is ESM-only package and cannot be imported using `require`.
(async () => { const fetch = await import('node-fetch'); })()

// async makes a function return a promise
const aFunction = async () => {
  return 'test'
}

aFunction().then(console.log) // This will alert 'test'
console.log("This will print first.")

const getFirstPostData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts') // get post list
    .then(response => response.json()) // parse JSON
    .then(posts => posts[0]) // pick first post
    .then(post => fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)) // get post data
    .then(postResp => postResp.json()) // parse JSON
    .catch(e => console.error);
}

getFirstPostData().then(console.log);

const getFirstPostData2 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  const post = posts[0];
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  const postData = postResponse.json();
  return postData;
}

(async () => { console.log(`postData = [${JSON.stringify(await getFirstPostData2(), null, 4)}]`) })();

