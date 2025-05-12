const http=require("http");

// url structure
const port=4060

const server=http.createServer((req,res)=>{
    let url=req.url
    if(url=='/'){
        res.writeHead(200,{'content-type':'text'})
        res.end("this is home page");
    }else if(url=='/about'){
        res.writeHead(200,{'content-type':'text'})
        res.end("this is aboutus page");
    }else if(url=='/contact'){
        res.writeHead(200,{'content-type':'text'})
        res.end("this is contactus page");
    }
    else{
        res.writeHead(404)
        res.end("404 page is not found!!");
    }
})

server.listen(port,(err)=>{
    if(err){
        console.log('sever is not started');
    }
    console.log(`server is successfully started on port ${port}`);
    
})