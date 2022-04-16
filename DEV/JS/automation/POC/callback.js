// read 2 files f1 and f2

const fs =require("fs");

fs.readFile("f1.txt",cb);

function cb(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res + "");
        fs.readFile("f2.txt",cb2);
    }
}

function cb2(err,res){
    if(res){
        console.log(err);

    }else{
        console.log(res+ "");
            console.log("data printed");
    }
}