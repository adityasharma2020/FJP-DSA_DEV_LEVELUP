const fs = require("fs");

let f1readPromise = fs.promises.readFile('f1.txt');

function read2file(f1kadata) {
  console.log(f1kadata + '');
  let f2readPromise = fs.promises.readFile('f2.txt');
  return f2readPromise;
}

function read3file(f2kadata) {
  console.log(f2kadata + '');
  let f3readPromise = fs.promises.readFile('f3.txt');
  return f3readPromise;
}

function alldone(f3kadata) {
  console.log(f3kadata + '');
  console.log('read all files serially');
}

f1readPromise
  .then(read2file)
  .then(read3file)
  .then(alldone)
  .catch(function (err) {
    console.log(err);
  });

  //q2. read all three files parallely


  let f1p = fs.promises.readFile('f1.txt');
  let f2p = fs.promises.readFile('f2.txt');
  let f3p = fs.promises.readFile('f3.txt');

  f1p.then(cb);
  f2p.then(cb);
  f3p.then(cb);

  function cb(req,res){
    console.log(data + "");
  }