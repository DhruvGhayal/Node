let a=20,b;

new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(30),2000)
    }).then((data)=>{
    b=data;
    console.log(a+b);
});