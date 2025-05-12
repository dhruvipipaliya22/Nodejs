import http from 'http'
import express from 'express'

// url structure
const port=4080

const server=http.createServer((req,res)=>{
    let url=res.url;
    if(url=='/'){
        res.writeHead(200,{'content-type':'text'})
        res.end("this is home page");
    }
    else if(url=='/api/user'){
        const user={
            name:"dhruvi",
            age:18,
            email:"dhruvi@gmail.com"
        }
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(user));
    }
    else{
        res.writeHead(404);
        res.end('404 page is not found');
    }
});

server.listen(port,(err)=>{
    if(err){
        console.log("server is not started");
    }
    console.log(`server is successfully started on port ${port}`);
})