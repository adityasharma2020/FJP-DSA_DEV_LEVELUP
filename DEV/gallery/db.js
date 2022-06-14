// connect to database
let db;
let openRequest = indexedDB.open('myDatabase');
openRequest.addEventListener('success', () => {
  console.lof('db connected');
  db = openRequest.result;
});

openRequest.addEventListener('upgradeneeded', () => {
  console.log('db upgraded or initialised');
  db = openRequest.result;

  db.createObjectStore('video', { keyPath: 'id' });
  db.createObjectStore('image', { keyPath: 'id' });
});

openRequest.addEventListener('error', () => {
  console.log('db error');
});
