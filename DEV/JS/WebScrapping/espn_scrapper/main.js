let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request = require("request");
const cheerio = require("cheerio");

request(url,cb);

function cb(err,res,body){
    if(err){
    //  console.error("error", err);

    }else{
        handleHTML(body);
    }
}

function handleHTML(html){
    let  selecTool = cheerio.load(html);
    let anchorElem = selecTool('a[class="ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]');
    console.log("anchor element",anchorElem);

    //attr is a method for getting all attributes and their values.
    let relativeLink = anchorElem.attr("href");
    console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    console.log(fullLink);

}




