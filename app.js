const http = require('http');

const server=http.createServer((req,res)=>{
    console.log(res.url, res.method,res.header)
});


server.listen(3000);