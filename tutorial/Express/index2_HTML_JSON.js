const express = require('express');
const app = express();

//adding route to express()
app.get('',(req,res)=>{
    //console.log('data sent by client',req.query);
    res.send(`
        <h1>Greetings Stranger</h1>
        <a href="/about">Go to About Page</a>
        `);
});

app.get('/about',(req,res)=>{
    res.send(`
        <h2>Enter user name </h2>
        <input type = "text" placeholder="User name" value="${req.query.name}"/>
        <button>Submit</button>
        <a href="/">Go to Home Page</a>
        `);
});

app.get('/help',(req,res)=>{
    res.send([
        {
        name:'dhruv',
        email:'ghayal@yahoo.com'
        },
        {
        name:'vikram',
        email:'rathor@yahoo.com'
        }
        ]);
});

app.listen(5000);