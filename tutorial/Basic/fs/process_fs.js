const fs = require('fs');

const input = process.argv;
//input.forEach((v,i)=>console.log(`${i}:${v}`));
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])

}else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}else
{
    console.log('invalid input')
}