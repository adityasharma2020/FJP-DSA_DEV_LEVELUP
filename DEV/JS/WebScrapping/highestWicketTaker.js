const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";

const request = require("reqsust");
const cheerio = require("cheerio");

request(url , cb);

function cb(error,response,html){
    if(error){
        console.error(error);

    }else{
        extractHtml(html);
    }

}


function extractHtml(html){
    const $ = cheerio.load(html);
    
}