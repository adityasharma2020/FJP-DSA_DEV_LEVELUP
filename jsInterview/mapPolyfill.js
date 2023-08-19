let myArr = [1,2,3,4,5];

let mapResult = myArr.map(function(x){
    return x*x;
})

console.log(mapResult)

function MapPolyfill(myArr){
    let newArr = [];
    for(let i=0;i<myArr.length;i++){
        newArr[i] = myArr[i]*myArr[i]
    }

    return newArr;
}
console.log(MapPolyfill(myArr))