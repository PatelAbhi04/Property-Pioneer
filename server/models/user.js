import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username:{
            required:true,
            type:String,
            unique:true,

        },
        email:{
            required:true,
            type:String,
            unique:true,

        },
        password:{
            required:true,
            type:String,
           

        },
        contact:{
            required:true,
            type:Number,
            unique:true


        },
        avatar:{
            type:String,
            default:'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg'



        },

    },{timestamps:true}
);

const User = mongoose.model('User',userSchema);


export default User;