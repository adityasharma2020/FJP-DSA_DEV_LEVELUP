//chatur

function fp() {
  //this is called promisifying of a function.
  return new Promise(function (resolve, reject) {
    resolve('h1');
  });
}

let promisifyFunc = fp();
promisifyFunc.then(function (data) {
  console.log(data);
});

promisifyFunc.catch(function (err) {
  console.log(err);
});

//assan bhasha me Rancho

async function f() {
  return 'hi';
}

let async = f();

async.then(function (data) {
  console.log(data);
});


async function f(){
    let promise = new promise(function(resolve,reject){
        setTimeout(function(){
            resolve("done",5000);
        })
    });

    let result = await promise; // wait unctil the promise resolves
    console.log("hello");
    alert(result);//done
}

f();
console.log("YOLO");