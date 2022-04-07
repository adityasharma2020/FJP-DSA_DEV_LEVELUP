const express = require('express');
const app = express();
const PORT = 4000;

const handlelistening = () => {
  console.log(`listening at http://localhost:${PORT}`);
};

const handleHome = (req, res) => res.send('hi form res');

// array function
const handleProfile = (req, res) => res.send('you are on my  profile');

const betweenHome = (req,res, next) =>{ 
    console.log('betwSeen');
    //next is used to call the next middleware in the line i.e handleHome
    next();
};
//...............as many middleware as we want and finally we are going to handle the route............
app.use(betweenHome);

app.get('/', handleHome);

app.get('/profile', handleProfile);
//when  you start listeinng call function handleListening
app.listen(PORT, handlelistening);

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })
