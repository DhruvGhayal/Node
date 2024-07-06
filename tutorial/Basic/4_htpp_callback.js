const http = require('http');
http.createServer((rq,rp)=>{
    rp.write('Dhruv Ghayal first server');
    rp.end();
}).listen(4500);