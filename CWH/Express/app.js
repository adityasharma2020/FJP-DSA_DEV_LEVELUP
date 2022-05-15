const express = require('express');

const app = express();
const path = require('path');

// serving static files
// /static is url and static writen in express.static() is  folder.
app.use('/static', express.static('static'));

//set the template engine as pug.

app.set('view engine', 'pug');

//set the views directory
app.set('views', path.join(__dirname, 'views'));

//our pug demo end point

app.get('/demo', (req, res) => {
  res
    .status(200)
    .render('demo', {
      title: 'hey aditya',
      message: 'hello there and thanks  for telling me how to use pug',
    });
});

app.get('/', (req, res) => {
  res.send('this is homepage of first express app with harry');
});

app.get('/about', (req, res) => {
  res.send('this is about page of  first express app with harry');
});

app.post('/about', (req, res) => {
  res.send('this is a post request on about page');
});

const port = 80;
app.listen(port, () => {
  console.log(`this application started successfully on port ${port}`);
});
