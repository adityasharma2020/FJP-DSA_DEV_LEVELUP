const fs = require("fs");

let text  = fs.readFileSync("dele.txt","utf-8");
console.log(text);
text = text.replace("content", "changed ")

fs.writeFileSync("roahan.txt",text);
console.log(text);