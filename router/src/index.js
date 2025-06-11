import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/db.js'
import cors from 'cors'
import router from './router/book.router.js'

dotenv.config({
    path: "./.env"
});

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

// basic router
app.get("/",(req,res)=>{
    res.send("Book Api",router)
})

connectDB();

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server is started on port ${process.env.PORT}`) : null;
});