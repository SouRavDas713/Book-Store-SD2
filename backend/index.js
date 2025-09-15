import express from 'express' ; 
import mongoose from 'mongoose' ; 
import {PORT,mongoDBURL} from './config.js' ; 


const app = express() ; 

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


app.get('/' , (req , res)=>{
    console.log(req) ; 
    return res.status(234).send("Welcome To BookStore") 
})