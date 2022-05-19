const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files

//express.urlencoded() is a middle ware which helps us to get the data from express.
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
  const con =
    'This is the best content on the internet so far so use it wisely';
  const params = { title: 'PubG is the best game', content: con };
  res.status(200).render('index.pug', params);
});

app.post('/', (req, res) => {
  let name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;
  let outputToWrite = `client name is ${name}, age is ${age}, and his/her address is ${address}, more about client ${more}`;
fs.writeFileSync("output.txt",outputToWrite)

  const params = { message: 'your form is sumitted successfully.' };
  res.status(200).render('index.pug', params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});