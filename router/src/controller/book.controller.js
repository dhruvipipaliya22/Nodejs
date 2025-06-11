import { Book } from "../models/book.models.js";

// book create with controller
// post
// create book
export const creatBook = async (req, res) => {
    try {
        const book = await Book.create(res.body);
        res.status(201).json({
            success: true,
            date: book
        })
    }catch(err){
        res.status(400).json({
            success:true,
            error:err.message
        })
    }
}
// getbook
// GET
export const getbook=async(req,res)=>{
    try{
        const books=await Book.find();
        res.status(200).json({
            success:true,
            data:books
        })
    }catch(err){
        res.status(500).json({
            success:false,
            error:"server is Error"
        })
    }
}
// update book
// put
export const updateBook=async(req,res)=>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            renValidators:true
        });
        if(!book){
            return res.status(404).json({
                success:false,
                error:"Book Not Found"
            })
        }
        res.status(200).json({
            success:true,
            data:book
        });
    }catch(err){
        res.status(400).json({
            success:false,
            error:err.message
        })
    }
}
// Delete Book
// Delete
export const deleteBook =async(req,res)=>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({
                success:false,
                error:'Book Not Found'
            })
        }
        res.status(200).json({
            success:true,
            data:{}
        })
    }catch(err){
        res.status(500).json({
            success:false,
            error:"Server Error"
        })
    }
}