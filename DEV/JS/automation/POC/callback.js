// // read 2 files f1 and f2

const fs = require('fs');

//callback hell -->pyramind of doom
fs.readFile('f1.txt', function cb1(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res + '');
    fs.readFile('f2.txt', function cb2(err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res + '');
        fs.readFile('f3.txt', function (err, res) {
          if (err) {
            console.log(err);
          } else {
            console.log(res + '');
            console.log('read all files.');
          }
        });
      }
    });
  }
});


//one way to overcome callback hell is to write sepeate callback functions.


// fs.readFile("f1.txt",cb);

// function cb(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res + "");
//         fs.readFile("f2.txt",cb2);
//     }
// }

// function cb2(err,res){
//     if(res){
//         console.log(err);

//     }else{
//         console.log(res+ "");
//             console.log("data printed");
//     }
// }

//read 3 files f1.txt f2.txt f3.txt parallely using callbacks

fs.readFile('f1.txt', cb);
fs.readFile('f2.txt', cb);
fs.readFile('f3.txt', cb);

function cb(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res + '');
  }
}
