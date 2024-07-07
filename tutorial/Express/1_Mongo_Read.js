const dbConnect = require('./mongodb');

//2 methods to handle promises 
//1. add .then((resp) => {resp.find()})
// dbConnection().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     });
// });

//2. await resp.find()
const read = async ()=>{
    let db = await dbConnect();
    let result = await db.find().toArray();
    console.warn(result);
}

read();

