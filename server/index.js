import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/UserRoutes.js'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser'
import listingRouter from './routes/listingRoutes.js'
import path from 'path';
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
const __dirname = path.resolve();
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/listing",listingRouter);
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

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