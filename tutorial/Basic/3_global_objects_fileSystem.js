const fs = require('fs');
//Console _driname _filename
console.log(__dirname);
console.log(__filename);

//Buffer Process Timer

fs.writeFileSync('code.txt','Dhruv Ghayal');
const data = fs.readFileSync('./code.txt',{ encoding: 'utf8', flag: 'r' });
console.log(data);