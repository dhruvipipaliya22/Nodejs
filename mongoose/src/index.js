import dotenv from 'dotenv'
import express from 'express'

const app = express();

dotenv.config({
    path: "./.env"
})

app.get('/',(req,res)=>{
    res.send('server is started...');
});

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server is started on port ${process.env.PORT}`) : null;
})