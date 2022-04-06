
const request = require("request");

console.log("before");
request("http://www.worldometers.info/coronavirus/",cb);
console.log("after");

function cb(error, response,html){
    console.error("error:"+error);
    // console.log("statusCode: "+response&&response.statusCode);
    console.log("html code : "+ html);
}


// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });