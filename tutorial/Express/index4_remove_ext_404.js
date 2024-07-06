const express = require('express');
const app = express();
const path = require('path');
const dirPath = path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.sendFile(`${dirPath}/index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${dirPath}/about.html`)
})

app.get('/help',(req,res)=>{
    res.sendFile(`${dirPath}/help.html`)
})

app.get('*',(req,res)=>{
    res.sendFile(`${dirPath}/404.html`)
})

app.listen(5000);