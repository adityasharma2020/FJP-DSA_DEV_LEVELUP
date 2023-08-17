const http = require('http')

//using the create server function we can actually create a
//basic http server using http module, this function returns a
//server object and takes a callback function(listener function)
//  as an argument.

//this function created a server object but didn't start
// the server.
const server = http.createServer(function listener() {
  /*this callback is a kind of a listener function that
  // is going to be collect every http request that we
  // will make to our server
  request -> we will be able to details of incoming http request.
  response -> we will be able to configure  what res we need to send.
  
  */
  //TODO
})

const PORT = 3000

server.listen(PORT, function exec() {
  //once we successfully boot up the serve on the given port
  // this callback will be executed.
  console.log(`server is up and running on PORT : ${PORT}`)
})
