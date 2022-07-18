let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];

let obj = {};
 
for(let i=0;i<arr.length;i++){

  if(obj[arr[i]]){
    obj[arr[i]] = obj[arr[i]] +1;

  }else{
    obj[arr[i]] = 1;
  }
}
console.log(obj);

//using hof

function getCount(obj,count){
  if(obj[count]){
    obj[count] =  obj[count]+1;
  }
  else{
    obj[count] =1;
  }

  return obj;
}
var ans = arr.reduce(getCount,{});
console.log(ans);
