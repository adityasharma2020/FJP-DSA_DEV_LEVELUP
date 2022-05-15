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



async function showAvatar(){
  //read our json

  let response = await fetch("https://javascript.info/article/promise-chaining/user.json");
  console.log(response);
  let user = await response.json();
  console.log(user);
  
  //read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser  = await githubResponse.json();

   //show the awatar
   let img = document.createElement("img");
   img.src = githubUser.avatar_url;
   img.className = "promise-avatar-example";
   document.body.append(img);


   //wait 3 sec
   await new promise(resolve,reject) => setTimeout(resolve,3000);
   img.remove();

   return githubUser;



}


showAvatar();

//try catch finally

try{
  console.log("in try");

}catch(e){
  console.log(e)
}finally{
  console.log("i am in finally");
  console.log("i am in finally 2");
}

try{
  throw new Error("some error");

}catch(e){
  console.log(e);
}finally{
  console.log("i am always executed");
}





