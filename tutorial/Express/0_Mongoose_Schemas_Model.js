const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-com');
//SCHEMA control input field, their type and data structure
const productSchema = new mongoose.Schema(
{
    name : String,  
    price:  Number,
    brand: String,
    catagory: String
});


//MODEL interact with DB
//CRUD with Model

//1.Find through Model
const findInDB=async()=>{
    const product = mongoose.model('products',productSchema);
    let data = await product.find(
        {}
    )
    console.log(data);
}
findInDB();

//2.Insert through Model
const saveInDB =async ()=>{
    const product = mongoose.model('products',productSchema);
    let data = product (
        {
            name:"m8",
            brand:"maxx",
            price:200,
            catagory:"mobile"
        });
    let result = await data.save();
    console.log(result);
}

//3.Update through Model
const updateInDB=async()=>{
    const product = mongoose.model('products',productSchema);
    let data = await product.updateOne(
        {name:'m7'},
        {$set:{price:150,name:'m71'}}
    );
    console.log(data);
}

//4.Delete through Model
const deletInDB=async()=>{
    const product = mongoose.model('products',productSchema);
    let data = await product.deleteOne(
        {name:'m71'}
    )
    console.log(data);
}