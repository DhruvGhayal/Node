const dbConnect = require('./mongodb');

const insertData = async ()=>{
    const db = await dbConnect(); 
    //1. for inserting single data
    // const result = await db.insertOne(
    //     [
    //         {name:'max1',brand:'micromax',price:220,catagory:'mobile'}
    //     ]);
    //2. for inserting multiple data
    const result = await db.insertMany(
        [
            {name:'max1',brand:'micromax',price:220,catagory:'mobile'},
            {name:'max2',brand:'micromax',price:320,catagory:'mobile'},
            {name:'max3',brand:'micromax',price:420,catagory:'mobile'}
        
        ]);
    if(result.acknowledged){
        console.log('Data Inserted')
    }
}

insertData();
