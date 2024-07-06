const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt`;
//1.Create file
//fs.writeFileSync(filePath,'simple text file');

//2.Read file
//fs.readFile(filePath,'utf-8',((e,i)=>console.log(i)))

//3. Update file
//fs.appendFile(filePath,' and new update 2.0',(e)=>(!e)?console.log('all done'):console.log(e));

//4. Rename filePath changed
//fs.rename(`${dirPath}/fruit.txt`,`${dirPath}/anyFruit.txt`,(e)=>(!e)?console.log('All done'):console.log(e));

//5. Delete
fs.unlinkSync(`${dirPath}/anyFruit.txt`,(e)=>(!e)?console.log('All done'):console.log(e));