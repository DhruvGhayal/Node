const express = require('express');
const app = express();

//adding route to express()
app.get('',(req,res)=>{
    console.log('data sent by client',req.query);
    res.send('Greetings Stranger');
});

app.get('/about',(req,res)=>{
    res.send('This is Dhruv Ghayal first Express page');
})

app.get('/help',(req,res)=>{
    res.send('What are you looking for...');
})

app.listen(5000);