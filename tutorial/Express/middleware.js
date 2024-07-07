const reqfilter=(req,res,next)=>{
    if(req.query.age){
    if(req.query.age >= 18){
        next();
    }else{
        res.send('You are under age');
    }}else{
        res.send('Please input age');
    }
}

module.exports=reqfilter;