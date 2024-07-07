const express = require('express');
const app = express();

const path = require('path');
const dirPath = path.join(__dirname,'public');
const ejsPath = path.join(__dirname,'view');

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${dirPath}/index.html`)
})

app.get('/profile',(req,res)=>{
    const user = {
        name:`Dhruv Ghayal`,
        email:`ghayal.gd@email.com`,
        city:`Noida`,
        skills:[`ReactJS`,`js`,`node`,]
    }
    res.render(`${ejsPath}/profile.ejs`,{user});
})

app.get('/login',(req,res)=>{
    res.render(`${ejsPath}/login.ejs`);
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