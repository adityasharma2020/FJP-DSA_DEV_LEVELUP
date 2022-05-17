const http = require('http');
const express = require('express');
const port = 8000;



const { application } = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.status(200).render('index.pug');
});
app.get("/contact", (req, res)=>{ 
  res.status(200).send('contact.pug');
});


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})