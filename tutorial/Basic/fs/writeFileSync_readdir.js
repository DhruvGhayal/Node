const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
console.log(__dirname);
console.log(dirPath);
for (let i=0; i<=4; i++){
fs.writeFileSync(`${dirPath}/hello${i}.txt`,`This is file number ${i}`);
}

fs.readdir(dirPath,(e,f)=>{
    f.forEach((i,j)=>console.log(`${j}:${i}`))
})