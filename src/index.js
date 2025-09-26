//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js" ;

dotenv.config({
    path: './env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is at port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed !!!",err);
    
})



/*
import express from "express"
const app=express()
(async()=>{
    try{
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error",(error)=>{
            console.log("Err: ",error);
            throw error
         })
         app.listen(process.env.PORT,()=>{
            console.log(`app is listening on ${process.env.PORT}`);
            
         })
    }catch(error){
        console.error("Error: ",error);
        throw error
        
    }
    

})()

*/