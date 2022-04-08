// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router.js';
const app = express();

const handleHome = (req, res) => res.send('hi form res');

// array function
const handleProfile = (req, res) => res.send('you are on my  profile');

// const betweenHome = (req,res, next) =>{
//     console.log('betwSeen');
//     //next is used to call the next middleware in the line i.e handleHome
//     next();
// };
//...............as many middleware as we want and finally we are going to handle the route..........

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet()); //for security of node apps
app.use(morgan('dev')); //  http requests logger

app.get('/', handleHome);

app.get('/profile', handleProfile);

//use 'use' instead of get if want to use the router/
app.use('/user', userRouter);
//when  you start listeinng call function handleListening
// app.listen(PORT, handlelistening);

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

export default app;
