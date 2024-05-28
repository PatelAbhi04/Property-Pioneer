import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/UserRoutes.js'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser'
dotenv.config();

mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("connection succsess");
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000,()=>{
    console.log('server is running  on port 3000')
});

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

//middlewear for showing error 
app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message = err.message || 'internal server err';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})