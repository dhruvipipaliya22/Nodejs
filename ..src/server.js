const express = require('express');

const port = 4040;

const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    return res.render('/index');
});

app.listen(port,(err)=>{
    !err ? console.log(`server is started on port ${port}`) : null;
});