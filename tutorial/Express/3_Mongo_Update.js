const dbConnect = require('./mongodb');

const updateData=async()=>{
    let db = await dbConnect();
    //1. single data update
    // let result = await db.updateOne(
    //     {name:'max3'},{$set:{name:'max 33'}})
    //     if(result.acknowledged){
    //         console.log(`Data Updated!`);
    //     }
    
    //2. multi data update
    let result = await db.updateMany(
            {brand:'micromax'},{$set:{name:'max 33'}})
            if(result.acknowledged){
                console.log(`Data Updated!`);
            }
    
}

updateData();