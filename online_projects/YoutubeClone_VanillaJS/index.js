const express = require('express');
const app = express();
const PORT = 4000;

function handlelistening() {
  console.log(`listening at http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send('hi form res');
  console.log('hello from req');
}

function handleProfile(req, res) {
  res.send('you are on my  profile');
}

app.get('/', handleHome);

app.get('/profile', handleProfile);
//when  you start listeinng call function handleListening
app.listen(PORT, handlelistening);

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })
