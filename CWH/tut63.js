// console.log('hello world');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
  
    <style>
        .container{
            background-color: antiquewhite;
            text-align: center;
            border: 2px solid red;
            margin: 20px 40px;
            padding: 20px;
  
        }
        #time{
            font-weight: bold;
        }
    </style>
    <body>
      <div class="container">
  
  
          <span id="time"></span>
      </div>
  
      <script>
      //   let newDate = new Date();
  
      //   console.log(typeof newDate);
  
      //   let initialdate = new Date(0);
      //   let initialdate2 = new Date(1000);
      //   console.log(initialdate);
      //   console.log(initialdate2);
      //   let date = newDate.getDate();
      //   console.log(date);
  
      //   let month = newDate.getMonth();
      //   console.log(month);
  
      //   let hours = newDate.getHours();
      //   console.log(hours);
  
      //   newDate.setDate(32);
      //   newDate.setMinutes(23);
      //   console.log(newDate);
        setInterval(updateTime,1000);
        function updateTime(){
            let span = document.getElementById("time");
            let newDate = new Date();
           span.innerText = newDate;
        }
        
        console.log(Date.now());
      </script>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});