const express = require('express');
const dbConnect = require('./mongodb');
//mongodb module require for delete to get ID of data
const mongodb = require('mongodb');
const app = express();

//midware for POST route
//body-parced used before express.json in express4 and below 
app.use(express.json());


//1.GET Routing
app.get('/',async (req,resp)=>{
    let db = await dbConnect();
    db = await db.find().toArray();
    resp.send(db)
});

//2.POST Routing
app.post('/',async (req,resp)=>{
    let db = await dbConnect(); 
    let result = await db.insertOne(req.body)
    resp.send(req.body)
})

//3.PUT Routing
app.put('/:name',async (req,resp)=>{
    let db = await dbConnect(); 
    let result = await db.updateOne(
        {name: req.params.name },
        {$set:req.body}
    )
    resp.send({result:'update'});
})

//4.DELETE Routing
app.delete('/:id',async (req,resp)=>{
    let db = await dbConnect(); 
    let result = await db.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)}
    )
    resp.send(result);
})

app.listen(5200);