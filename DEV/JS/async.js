const fs = require('fs');

//sync
// let data = fs.readFileSync('f1.txt');
// console.log("async data: "+data);

//async
fs.readFile('f1.txt', cb);
function cb(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log('data' + data);
  }
}

console.log('after ');
console.log('meanwhile');
