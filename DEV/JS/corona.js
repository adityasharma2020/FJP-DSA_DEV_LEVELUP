const request = require("request");
const cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus/",cb);

function cb(error, response, html){
    if(error){
        console.error("error:"+error);
    }else{
        handleHtml(html);
        
    }
}

function handleHtml(html){
    let selTool = cheerio.load(html);
    let array = selTool("#maincounter-wrap span");
    for(let i=0;i<array.length;i++){
       
        console.dir( selTool(array[i]).text());
    }
     
}