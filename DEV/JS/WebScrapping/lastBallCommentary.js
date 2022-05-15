const url =
  'http://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';

const request = require('request');
const cheerio = require('cheerio');

request(url, cb);
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    extractHtml(html);
  }
}

function extractHtml(html) {
  //instead of selCtool we name the varialble $
  let $ = cheerio.load(html);
  let array = $(
    'ds-text-tight-m ds-font-regular ds-flex ds-px-3 ds-py-2 lg:ds-px-4 lg:ds-py-[10px] ds-items-center ds-relative'
  );

  let text = $(array[0]).text();
  let htmldata = $(array[0]).html();
  console.log(text);
  console.log(htmldata);
}

console.log('after');
