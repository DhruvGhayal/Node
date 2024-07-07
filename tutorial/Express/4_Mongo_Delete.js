const dbConnect = require('./mongodb');

const deleteData=async()=>{
    let db = await dbConnect();
    //let result = await db.deleteOne({name:'max 33'});
    let result = await db.deleteMany({name:'max 33'});
    if(result.acknowledged){
        console.log('All deleted');
    }
}

deleteData();